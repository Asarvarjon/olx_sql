
const http = require("http");

module.exports.ErrorHandler = class ErrorHandler extends Error {
	constructor(code, message) {
		super();
		this.code = code;
		this.message = message;
	}
}

module.exports.handleError = function handleError(error, response) {
	const { code, message } = error;

	response.status(code || 400).json({
		ok: false,
		message,
	});
}