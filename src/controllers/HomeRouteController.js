 module.exports = class HomeRouteController {
   static async HomeGetController(req, res) {
     try {
       const list = await req.client.query(`SELECT * FROM categories;`);
       const productsList = await req.client.query('SELECT * FROM products JOIN users ON products.user_id = users.user_id;');

       console.log(productsList);
       res.status(200).json({
         ok: true,
         message: "OK",
         data: {
           user: req.user,
           list: list.rows,
           productsList: productsList.rows
         }
       })
     } catch (error) {
       console.log(error);
       next(error)
     }
   }

   static async ProductDetail(req, res) {
     // Postgres
     const detail = await req.client(`SELECT * FROM products WHERE user_id = ${req.params.id} JOIN users ON user_id = products.user_id JOIN categories ON product.category_id = category_id;`)

     const adsOwner = await req.client(`SELECT * FROM products WHERE user_id = ${req.params.id} JOIN users ON user_id = products.user_id;`)


     res.status(200).json({
       ok: true,
       message: "OK",
       data: {
         user: req.user,
         detail: detail.rows,
         adsOwner: adsOwner.rows
       }
     })
   }

   static async UserDetailGetController(req, res) {

     let productUser = await req.client.query(`SELECT * FROM products WHERE user_id = ${req.params.id} JOIN users ON user_id = ${req.params.id} JOIN categories ON products.category_id =  category_id;`)


     let ads = await req.client.query(`SELECT * FROM products WHERE user_id = req.params.id;`)


     res.status(200).json({
       ok: true,
       message: "OK",
       data: {
         user: req.user,
         productUser: productUser.rows,
         ads: ads.rows
       }
     })

   }

   static async UserExitController(req, res) {
     res.clearCookie("token")
     res.redirect("/")
   }
 }