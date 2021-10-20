const { SignUpGetController, SignUpPostController } = require("../controllers/HomeSignUpcontroller");

const router = require("express").Router();


router.get("/sign_up", SignUpGetController);
router.post("/sign_up", SignUpPostController)

module.exports = {
    path: "/user",
    router,
}