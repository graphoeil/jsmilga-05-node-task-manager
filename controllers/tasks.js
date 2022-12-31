// // Get all the tasks
const getAllTasks = (req, res) => {
	res.send('Get all tasks');
};

// Create a new task
const createTask = (req, res) => {
	res.send('Create task');
};

// Get single task
const getTask = (req, res) => {
	res.send('Get single task');
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