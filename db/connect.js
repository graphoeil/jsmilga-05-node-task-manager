// Imports
const mongoose = require('mongoose');

// Connect to DB
// First connect to DB then start the express server in app.js !
const connectDB = (url) => {
	// We return a promise !
	return mongoose.connect(url, {
		// Removing deprecation warning in the console
		// No need to do this with mongoose v6
		useNewUrlParser:true,
		useCreateIndex:true,
		useFindAndModify:false,
		useUnifiedTopology:true
	});
};

// Export
module.exports = connectDB;