import { Router } from "express";
import productsRouter from "./products.api.js";
import usersRouter from "./users.api.js";



const router = Router(); 

router.use ("/products", productsRouter);
router.use ("/users", usersRouter);


export default router;