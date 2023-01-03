// Mongoose model
// An instance of model is called a document
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

// Get all the tasks
// With asyncWrapper to avoid try / catch block
const getAllTasks = asyncWrapper(async(req, res) => {
	// Success
	const tasks = await Task.find({});
	res.status(200).json({ tasks });
});

// Create a new task
// If table "tasks" doesn't exist
// This request will create the table
// based on the Task model, the name
// of the table will be base on Task with and "s"
const createTask = async(req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error){
		res.status(500).json({ msg:error });
	}
};

// Get single task
const getTask = async(req, res) => {
	const { id:taskID } = req.params;
	try {
		const task = await Task.findOne({ _id:taskID });
		// No task matching id => mongo will return null
		if (!task){
			return res.status(404).json({ msg:`No task with id => ${ taskID }` });
		}
		// Task exist
		res.status(200).json({ task });
	} catch (error){
		// Is used if the id passed does not have the right number of characters
		// therefore mongo returns an error message => CastError
		res.status(500).json({ msg:error });
	}
};

// Update task
const updateTask = async(req, res) => {
	const { id:taskID } = req.params;
	try {
		// Task id to update, then replacing data => req.body
		const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
			// Options to return new task and for validating data passed
			new:true,
			runValidators:true
		});
		// No task matching id
		if (!task){
			return res.status(404).json({ msg:`No task with id => ${ taskID }` });
		}
		res.status(200).json({ task });
	} catch (error){
		res.status(500).json({ msg:error });
	}
};

// Delete task
const deleteTask = async(req, res) => {
	const { id:taskID } = req.params;
	try {
		const task = await Task.findOneAndDelete({ _id:taskID });
		// No task matching id
		if (!task){
			return res.status(404).json({ msg:`No task with id => ${ taskID }` });
		}
		// Task has been deleted
		res.status(200).json({ task });
		// Or if we don't care about the deleted task
		// res.status(200).send();
		// Or, another way...
		// res.status(200).json({ task:null, status:'success' }); // Sky is the limit ;-)
	} catch (error){
		res.status(500).json({ msg:error });
	}
};

// Exports
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };