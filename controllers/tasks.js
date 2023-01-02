// Mongoose model
// An instance of model is called a document
const Task = require('../models/Task');

// Get all the tasks
const getAllTasks = async(req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error){
		res.status(500).json({ msg:error });
	}
};

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
const updateTask = (req, res) => {
	res.send('Update task');
};

// Delete task
const deleteTask = (req, res) => {
	res.send('Delete task');
};

// Exports
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };