// Imports
const express = require('express');

// Mongoose and db connection
// Import the file will invoke connect method
// => mongoose.connect(connectionString).then(() => { ...
require('./db/connect');

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
// Routes middleware
app.use('/api/v1/tasks', tasksRouter);

// Listen
const port = 3000;
app.listen(port, console.log(`Server is listening on port ${ port }...`));