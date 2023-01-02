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
const createTask = async(req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error){
		res.status(500).json({ msg:error });
	}
};

// Get single task
const getTask = (req, res) => {
	const { id } = req.params;
	res.json({ id });
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