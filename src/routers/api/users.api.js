import { Router } from "express";
import {
    readUsers,
    readUser,
    createUser,
    updatedUser,
    deletedUser,
    privateData,

} from "../../controllers/users.controllers.js"; 
import { passportCall } from "../../passport/passportcall.js";
import { roleAuth } from "../../middlewares/roleAuth.js";


const usersRouter = Router();

usersRouter.get("/", readUsers);
usersRouter.get("/:uid", readUser);
usersRouter.post("/", createUser);
usersRouter.put("/:uid", updatedUser);
usersRouter.delete("/:uid", deletedUser);
usersRouter.get("sessions/private-cookies", [passportCall('current'), roleAuth('user')], privateData);

export default usersRouter;