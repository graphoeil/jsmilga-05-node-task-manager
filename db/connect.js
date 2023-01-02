// Imports
const mongoose = require('mongoose');

// Connection string from Database Deployments => Connect button
// We must add the database name => /05-TASK-MANAGER?retryWrites...
// And replace the password => <password>
// If the database doesn't exist in mongo, it'll be created with first db interaction (create, read, ...).
const connectionString = 'mongodb+srv://graphoeil:juF5XP6xcsArulA9@nodeexpressprojects.bezuxkx.mongodb.net/05-TASK-MANAGER?retryWrites=true&w=majority';

// Connect to DB
mongoose.connect(connectionString, {
	// Removing deprecation warning in the console
	// No need to do this with mongoose v6
	useNewUrlParser:true,
	useCreateIndex:true,
	useFindAndModify:false,
	useUnifiedTopology:true
}).then(() => {
	console.log('Connected to the DB...');
}).catch((error) => {
	console.log(error);
});