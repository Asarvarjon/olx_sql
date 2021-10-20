const { generateHash } = require("../modules/bcrypt");
const { SignUpValidation } = require("../modules/validations"); 
 const { email: sendEmail } = require("../modules/email");
const { UserSignUpCreate } = require("../modules/sqlfunctions");

module.exports = class SignUpController { 
    static async SignUpGetController(req, res) { 
      res.status(200).json({
        ok: true,
        message: "OK"
      })
  }

  static async SignUpPostController(req, res) {
    
    try {
      const { name, email, phone, password} = await SignUpValidation(req.body) 

      const user = await UserSignUpCreate(req.client, name, email, password, phone); 

    res.status(200).json({
      ok:true,
      message: "Succesfully created"
    })
    } catch (error) {
      console.log(error); 
    }
  }
}