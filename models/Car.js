// Imports
const mongoose = require('mongoose');

// Car schema
const CarSchema = new mongoose.Schema({
	name:String,
	color:String
});

// Export
module.exports = mongoose.model('Car', CarSchema);