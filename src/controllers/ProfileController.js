 
const path = require("path") 


module.exports = class ProfileController { 
  static async ProfileUserGetController(req, res) {
	try { 
		const productCategory = await req.client.query(`SELECT * FROM categories;`)
    console.log(req.user); 
	
		res.status(200).json({
			ok:true,
			message: "OK",
			data: {
			  productCategory: productCategory.rows
			}
		})
	} catch (error) {
		console.log(error);
	}
  }

  static async ProfileCategoryPostController(req, res) {
      try {
          const {
            name
          } = req.body; 
    
          const newCategory = await req.client.query(`INSERT INTO categories(category_name, photo) VALUES($1, $2) RETURNING *`,[name, "jimi"]);
 
    
          await req.files.file.mv(path.join(__dirname, "..", "public", "images", req.files.file.name))
     
    
          res.status(200).json({
            ok:true,
            message: "Categories succesfully created"
          })
      } catch (error) {
        console.log(error);
      }
  }


  static async AddProductPostController(req, res) {
    try {
        const {name, content, phone, category, price} = req.body;  
        console.log(req.user);
        //  let photos = []; 

        //  if(Array.isArray(req.files.file)) { 
        //    req.files.file.forEach((photo) => {
            
        //     const name = photo.md5 + ".jpg"
        //     photo.mv(
        //       path.join(__dirname, "..", "public", "files", name)
        //     )
        //     photos.push(name) 
        //   })
        //  } else { 
        //     const name = req.files.file.md5 + ".jpg"

        //     req.files.file.mv(
        //       path.join(__dirname, "..", "public", "files", name)
        //     )  

        //     photos.push(name)
        //  }   

		 const product = await req.client.query(`INSERT INTO products(product_name, price, phone, photos, content, category_id, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,[name, price, phone, "nimadi", content, category, req.user.user_id])
 
  
		res.status(200).json({
			ok: true,
			message: "Product succesfully added!"
		})
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
 
}