// Get all the tasks
const getAllTasks = (req, res) => {
	res.send('Get all tasks');
};

// Create a new task
const createTask = (req, res) => {
	res.json(req.body);
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