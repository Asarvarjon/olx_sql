const expressFileUpload = require("express-fileupload");
const { ProfileCategoryPostController,AddProductPostController } = require("../controllers/ProfileController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { ProductDetail} = require("../controllers/HomeRouteController"); 

const router = require("express").Router();

const productFileUpload = expressFileUpload({
    safeFileNames: true
})

 
router.post("/add_category",  expressFileUpload(), ProfileCategoryPostController)
router.post("/add_product",  productFileUpload, AddProductPostController)
router.get("/details/:id", ProductDetail) 

module.exports = {
    path: "/product",
    router,
}