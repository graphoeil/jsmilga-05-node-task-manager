// Imports
const mongoose = require('mongoose');

// Task schema
const TaskSchema = new mongoose.Schema({
	// https://mongoosejs.com/docs/schematypes.html
	name:{
		type:String,
		// Validation
		required:[true, 'Must provide name'],
		trim:true,
		maxlength:[20, 'Name can not be more than 20 characters']
	},
	completed:{
		type:Boolean,
		default:false
	}
});

// Export
// A model is a representation of a mongo collection
// We use it in the controller => controllers/tasks.js
module.exports = mongoose.model('Task', TaskSchema);