const nodemailer = require("nodemailer");



module.exports.email = async function email(to, subject, mail_body, main_html) {
    const transport  = await nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth : {
            user: "sarvarjon.amriyev@mail.ru",
            pass: "7cUjn5TJftk8mihFGmFW",
        }
    })


    return transport.sendMail({
        from: `Amriyev Sarvarjon <sarvarjon.amriyev@mail.ru>`,
        to,
        subject,
        text: mail_body,
        html: main_html,
    })
}

 

