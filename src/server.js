

const express = require("express");
const cookieParser = require("cookie-parser")
const path = require("path"); 
const routes = require("./routes/routes");
// const UserMiddleware = require("./middlewares/UserMiddleware"); 
const { createServer } = require("http");
const { Server } = require("socket.io");
const socket = require("./modules/socket");
const Postgres = require("./modules/db");
const { addErrorHandler } = require("./middlewares/errorHandler"); 

const PORT = process.env.PORT || 3000;




async function server() {
    const app = express();
    const httpServer = createServer(app);

    const io = new Server(httpServer);

    socket(io)

    httpServer.listen(PORT, () => {
        console.log(`Server is ready at ${PORT}`);
    }); 

    try {

        // common middlewares
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(cookieParser())
        app.use(express.static(path.join(__dirname, "public"))) 
        const client = await Postgres()
        app.use(async(req, res, next) => {
              req.client = client; 
              next()
        })
        // app.use(UserMiddleware) 
        app.use(addErrorHandler) 
    } catch(error){
        console.log('SERVER ERROR ' + error);
    }  finally {
         routes(app)
    }
}


module.exports = server;
