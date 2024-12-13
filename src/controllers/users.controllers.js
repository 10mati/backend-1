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
          const { userId } = req.params;
          const data = await usersManager.readOne(userId);
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
          const {userId} = req.params;
          const data = req.body;
          const updatedUser = await usersManager.update(userId, data);
          if (updatedUser) {
            return res
            .status(200)
            .json({ message: `user updated with id ${userId}` });
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
          const { userId } = req.params;
          if (!userId) {
            const error = new Error("ID is required");
            error.statusCode = 400;
            throw error;
          }
          const deletedUser = await usersManager.delete(userId);
          if (deletedUser) {
            return res
            .status(204)
            .json({ message: `user deleted with id ${userId}` });
          } else {
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
          }
        } catch (error) {
          return next(error);
        }
      }

      async function showLogin(req, res, next) {
        try {
            res.render("login.handlebars", {}); 
        } catch (error) {
            next(error);
        }
    }
  
      async function login(req, res, next) {
        try {
            
            const { email, password } = req.body;
            const user = await usersManager.authenticate(email, password); 

            if (user) {
              return res.status(200).json({ userId: user.id });
            } else {
                const error = new Error("Invalid credentials");
                error.statusCode = 401;
                throw error;
            }
        } catch (error) {
            next(error);
        }
    }

      async function registerUser(req, res, next) {
        try {
            res.render("register.handlebars", {});
        } catch (error) {
            return next(error);
        }
    }


    

      async function registerUsers(req, res, next) {
        try {
          const data = req.body;
          const { email, password } = data;
          if (!email || !password) {
            const error = new Error("email and password are required");
            error.statusCode = 400;
            throw error;
          }
          
      
          const existingUser = await usersManager.readByEmail(email);
          if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409; 
            throw error;
          }
      
          const userId = await usersManager.create(data);
           return res.redirect(`/userProfile/${userId}`);
           // .status(201)
          //  .json({ message: `user registered with id ${userId}` });
        } catch (error) {
          return next(error);
        }
      }

      async function showUser(req, res, next) {
        try {
            const { userId } = req.params; 
            const user = await usersManager.readOne(userId);
            if (user) {
                res.render("userProfile.handlebars", { user }); 
            } else {
                const error = new Error("User not found");
                error.statusCode = 404;
                throw error;
            }
        } catch (error) {
            next(error);
        }
      }

       async function  privateData (req, res, next)  {
          try {
            if (!req.user) {
              throw new Error("No se puede acceder a los datos del usuario");
            
            }  res.json({
              user: req.user,
            });
          } catch (error) {
            next(error);
          }
        }
      
    

  export {
    readUsers,
    readUser,
    createUser, 
    deletedUser, 
    updatedUser,
    showLogin,
    login, 
    registerUser, 
    registerUsers, 
    showUser,
    privateData
    
  }