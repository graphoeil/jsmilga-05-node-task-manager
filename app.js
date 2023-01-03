// Imports
const express = require('express');

// Mongoose and db connection
const connectDB = require('./db/connect');

// .env
require('dotenv').config();

// App
const app = express();

// Router
const tasksRouter = require('./routes/tasks');

// For JSON parsing
app.use(express.json());

// Static assets
app.use(express.static('./public'));

// Routes middleware
app.use('/api/v1/tasks', tasksRouter);

// Test DEV
const Car = require('./models/Car');
app.post('/api/v1/cars', async(req, res) => {
	try {
		const car = await Car.create(req.body);
		res.status(201).json({ car });
	} catch (error){
		res.status(500).json({ msg:error });
	}
});

// 404
// We must defined after all other routes !!!!
// Will show Route does not exist...
const notFound = require('./middleware/not-found');
app.use(notFound);

// Custom error handler middleware
// For use in tasks.js "controllers" with asyncWrapper
const errorHandlerMiddleware = require('./middleware/error');
app.use(errorHandlerMiddleware);

// Port
// process.env.PORT is use for deployment...
// To test in the terminal => PORT=6000 node app.js
const port = process.env.PORT || 3000;

// Start
const start = async() => {
	try {
		await connectDB(process.env.MONGO_URI);
		// We only launch server if we successfully connected to db
		app.listen(port, console.log(`Server is listening on port ${ port }...`));
	} catch (error){
		console.log(error);
	}
};

// Init
start();