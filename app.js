// Imports
const express = require('express');

// Mongoose and db connection
const connectDB = require('./db/connect');

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

// Port
const port = 3000;

// Start
const start = async() => {
	try {
		await connectDB();
		// We only launch server if we successfully connected to db
		app.listen(port, console.log(`Server is listening on port ${ port }...`));
	} catch (error){
		console.log(error);
	}
};

// Init
start();