// Custom error handle middleware
// For use in tasks.js "controllers" with asyncWrapper
const errorHandlerMiddleware = (err, req, res, next) => {
	return res.status(500).json({ msg:err });
};

// Export
module.exports = errorHandlerMiddleware;