const { LoginGetController, LoginPostController } = require("../controllers/LoginController");


const router = require("express").Router();


router.get("/login", LoginGetController);
router.post("/login", LoginPostController)

module.exports = {
    path: "/",
    router,
}