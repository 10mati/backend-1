import { Router } from "express";
import apiRouter from "./mongo/index.api.js";
import viewRouter from "./views/views.router.js";


const router = Router();


router.use("/api", apiRouter);

router.use("/", viewRouter);


export default router;