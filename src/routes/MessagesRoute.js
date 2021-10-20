 
const { MessagesGetController, MessagesPostController } = require("../controllers/MessagesController");
const AuthMiddleware = require("../middlewares/AuthMiddleware")
const router = require("express").Router();

router.get("/messages/:id", AuthMiddleware, MessagesGetController); 
router.post("/messages/:id", AuthMiddleware, MessagesPostController); 



module.exports = {
    path: "/",
    router,
}