import express from "express";
import morgan from "morgan";
import _dirname from "./util.js";
import { engine } from "express-handlebars";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import router from "./src/routers/index.router.js";


try {
const server = express();
const PORT = 8080;
const ready = () => console.log("server ready on port" + PORT);
server.listen(PORT, ready);

server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", _dirname + "/src/views");

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('public'))

server.use(router);
server.use(errorHandler);
server.use(pathHandler);
    
} catch (error) {
    console.log(error);
}

