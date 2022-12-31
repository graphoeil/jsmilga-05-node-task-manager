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
router.patch('/:id', updateTask);

// Delete task
router.delete('/:id', deleteTask);

// Export
module.exports = router;