// Imports
const express = require('express');
const { getAllTasks, createTask, getTask, 
	updateTask, deleteTask } = require('../controllers/tasks');

// Router
const router = express.Router();

// Routes
// Get all the tasks
router.get('/', getAllTasks);

// Create a new task
router.post('/', createTask);

// Get single task
router.get('/:id', getTask);

// Update task
// Patch will partially update the old data by replacing element that are submitted in the request
// Put will replacing the old data with the data submitted in the request, but for that we must add overwrite:true
// Without overwrite mongoose will still patch the request
/* const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
	// Options to return new task and for validating data passed
	new:true,
	runValidators:true,
	overwrite:true <= !!!!!!!!!!!!!!!
}); */
router.patch('/:id', updateTask);

// Delete task
router.delete('/:id', deleteTask);

// Export
module.exports = router;