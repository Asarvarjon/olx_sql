const HomeRoute = require("./HomeRoute")
const LoginRoute = require("./LoginRoute")
const MessagesRoute = require("./MessagesRoute")
const profile = require("./profile")
const SignUpRoute = require("./SignUpRoute") 
const { NotFoundMiddleware } = require("../middlewares/notFoundMiddleware")
const { handleErrorCheck } = require("../middlewares/errorHandler")
const product = require("./product")


module.exports = app => { 
    try {
        app.use(HomeRoute.path, HomeRoute.router);
        app.use(LoginRoute.path, LoginRoute.router);
        app.use(SignUpRoute.path, SignUpRoute.router);
        app.use(profile.path, profile.router);
        app.use(MessagesRoute.path, MessagesRoute.router);
        app.use(product.path, product.router)

    } catch (error) {
        app.use(handleErrorCheck)
        app.use(NotFoundMiddleware)
    }
}