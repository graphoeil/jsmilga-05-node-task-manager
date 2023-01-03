// Async wrapper for try / catch block
const asyncWrapper = (fn) => {
	return async(req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (error){
			next(error);
		}
	};
};

// Export
module.exports = asyncWrapper;