// Imports
const express = require('express');
const { getAllTasks } = require('../controllers/tasks');

// Router
const router = express.Router();

// Routes
// Get all the tasks
router.get('/', getAllTasks);

// Create a new task

// Get single task

// Update task

// Delete task

// Export
module.exports = router;