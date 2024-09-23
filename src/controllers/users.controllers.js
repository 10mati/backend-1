import usersManager from "../data/users.manager.js";



    async function readUsers(req, res, next) {
      try {
        const { role } = req.query;
        const data = await usersManager.readAll(role);
        if (data.length > 0) {
          return res.status(200).json({ data, message: "users fetched" });
        } else {
          const error = new Error("users not found");
          error.statusCode = 404;
          throw error;
        }
      } catch (error) {
        return next(error);
      }
    }
  
    async function createUser(req, res, next) {
      try {
        const data = req.body;
        const { email, password } = data;
        if (!email || !password) {
          const error = new Error("email and password are required");
          error.statusCode = 400;
          throw error;
        }
        const userId = await usersManager.create(data);
        return res
          .status(201)
          .json({ message: `user created with id ${userId}` });
      } catch (error) {
        return next(error);
      }
    }

    async function readUser(req, res, next) {
        try {
          const { uid } = req.params;
          const data = await usersManager.readOne(uid);
          if (data) {
            return res.status(200).json({ data, message: "user fetched" });
          } else {
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
          }
        } catch (error) {
          return next(error);
        }
      }
    
      async function updatedUser(req, res, next) {
        try {
          const { uid } = req.params;
          const data = req.body;
          const updatedUser = await usersManager.update(uid, data);
          if (updatedUser) {
            return res
            .status(200)
            .json({ message: `user updated with id ${uid}` });
          } else {
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
          }
        } catch (error) {
            return next(error);
        }
      }
    
      async function deletedUser(req, res, next) {
        try {
          const { uid } = req.params;
          if (!uid) {
            const error = new Error("ID is required");
            error.statusCode = 400;
            throw error;
          }
          const deletedUser = await usersManager.delete(uid);
          if (deletedUser) {
            return res
            .status(204)
            .json({ message: `user deleted with id ${uid}` });
          } else {
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
          }
        } catch (error) {
          return next(error);
        }
      }
  
  
  export {
    readUsers,
    readUser,
    createUser, 
    deletedUser, 
    updatedUser

  }