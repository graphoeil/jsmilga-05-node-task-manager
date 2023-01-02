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

// Routes
// Homepage
app.get('/', (req, res) => {
	res.send('Task Manager App');
});
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

// Port
const port = 3000;

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