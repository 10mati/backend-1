import { Router } from "express";
import { showHome, showAdminPanel } from "../../controllers/products.controllers.js";
import { login, showLogin } from "../../controllers/users.controllers.js";
import { registerUser } from "../../controllers/users.controllers.js";
import { registerUsers } from "../../controllers/users.controllers.js";
import { showUser } from "../../controllers/users.controllers.js";



const viewRouter = Router()

viewRouter.get("/", showHome);
viewRouter.get("/products/admin", showAdminPanel);

viewRouter.get("/user/login", showLogin);
viewRouter.post("/user/login", login);
viewRouter.get("/user/register", registerUser);
viewRouter.post("/user/register", registerUsers);
viewRouter.get("/user/:userId", showUser);

export default viewRouter