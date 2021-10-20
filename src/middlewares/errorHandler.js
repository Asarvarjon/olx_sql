const { ErrorHandler, handleError } = require("../helpers/errorHandler");

 

module.exports.addErrorHandler = function addErrorHandler(request, response, next) {
	response.error = ErrorHandler;
	next();
}

module.exports.handleErrorCheck = function handleErrorCheck(error, request, response, next) {
	handleError(error, response)
}