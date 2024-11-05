import { Router } from "express";
import { showHome, showAdminPanel, showpaginated } from "../../controllers/db-controllers/products.controller.js";
import { login, showLogin } from "../../controllers/users.controllers.js";
import { registerUser } from "../../controllers/users.controllers.js";
import { registerUsers } from "../../controllers/users.controllers.js";
import { showUser } from "../../controllers/users.controllers.js";
import { cartsView, calculateTotal, addToCart } from "../../controllers/db-controllers/carts.controller.js";


const viewRouter = Router()

viewRouter.get("/", showpaginated);
viewRouter.get("/products/admin", showAdminPanel);

viewRouter.get("/carts/:cid", cartsView);
viewRouter.get('/carts/calculate/:uid', calculateTotal);
viewRouter.post('/carts/add/:productId', addToCart);


viewRouter.get("/users/login", showLogin);
viewRouter.post("/users/login", login);
viewRouter.get("/users/register", registerUser);
viewRouter.post("/users/register", registerUsers);
viewRouter.get("/users/:userId", showUser);

export default viewRouter