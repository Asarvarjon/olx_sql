const expressFileUpload = require("express-fileupload");
const { ProfileUserGetController } = require("../controllers/ProfileController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { ProductDetail, UserDetailGetController, UserExitController } = require("../controllers/HomeRouteController"); 

const router = require("express").Router();

const productFileUpload = expressFileUpload({
    safeFileNames: true
})


router.get("/profile", AuthMiddleware, ProfileUserGetController)  
router.get("/:id", UserDetailGetController)
router.get("/exit", UserExitController)

module.exports = {
    path: "/user",
    router,
}