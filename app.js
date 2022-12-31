// Imports
const express = require('express');

// App
const app = express();

// Router
const tasksRouter = require('./routes/tasks');

// For JSON parsing
app.use(express.json());

// Routes
// Homepage
app.get('/', (req, res) => {
	res.send('Task Manager App');
});
// Get all the tasks
app.use('/api/v1/tasks', tasksRouter);
// Create a new task
// Get single task
// Update task
// Delete task

// Listen
const port = 3000;
app.listen(port, console.log(`Server is listening on port ${ port }...`));