import { Router } from "express";
import {
    readUsers,
    readUser,
    createUser,
    updatedUser,
    deletedUser

} from "../controllers/users.controllers.js"; 

const usersRouter = Router();

usersRouter.get("/", readUsers);
usersRouter.get("/:uid", readUser);
usersRouter.post("/", createUser);
usersRouter.put("/:uid", updatedUser);
usersRouter.delete("/:uid", deletedUser);

export default usersRouter;