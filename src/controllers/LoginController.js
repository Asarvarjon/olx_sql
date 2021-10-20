 
const { compareHash } = require("../modules/bcrypt");
const { createToken } = require("../modules/jwt");
const { CreateSession } = require("../modules/sqlfunctions");
const { LoginValidation } = require("../modules/validations")

module.exports = class LoginController { 
    static async LoginGetController(req, res) { 

      res.status(200).json({
          ok:true,
          message: "OK"
      })
  }

  static async LoginPostController(req, res) {
    try {
      const { email, password } =  await LoginValidation(req.body) 

      const user = await req.client.query(`SELECT * FROM users WHERE email = $1`, [email]);
      

      if (!user) throw new Error("User topilmadi");

			if (!(await  password == user.rows[0].user_password ))
				throw new Error("Parol xato");  
      const session = await CreateSession(req.client, req.headers["user-agent"], user.rows[0].user_id); 

      const token = await createToken({
        session_id: session[0].session_id
      })

      res.status(200).json({
         ok:true,
         message: "OK",
         data: {
           token
         }
      })
    } catch (error) {
      console.log(error);
       
      next(error)
    }
  }
}