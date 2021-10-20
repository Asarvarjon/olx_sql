const { checkToken } = require("../modules/jwt");

module.exports = async function AuthMiddleware(req, res, next) {
	try {
		if (!req.headers["authorization"]) {
			throw new res.error(403, "Token is not defined");
		}

		const data = checkToken(req.headers["authorization"]) 
		if (!data) {
			throw new res.error(403, "Token doesn't match");
		}

		// const session = await Session.findOne({
		// 	_id: data.session_id,
		// }).populate("user_id");
        const session = await req.client.query(`SELECT * FROM user_sessions WHERE session_id = ${data.session_id};`)
		console.log(session);
		req.user = session.user_id;

		next();
	} catch (error) {
		next(error);
    }
}