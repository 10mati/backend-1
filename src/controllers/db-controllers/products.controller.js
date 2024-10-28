import productsMongoManager from "../../data/mongo/managers/product.manager.js";

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await productsMongoManager.create(data);
    return res
      .status(201)
      .json({ message: "PRODUCT CREATED", response: response._id });
  } catch (error) {
    return next(error);
  }
};
const readAll = async (req, res, next) => {
  try {
    const filter = req.query;
    const response = await productsMongoManager.readAll(filter);
    if (response.length > 0) {
      return res.status(200).json({ message: "PRODUCTS READ", response });
    } else {
      const error = new Error("PRODUCTS NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
const paginate = async (req, res, next) => {
  try {
    const { page, limit = 6 } = req.query;
    const response = await productsMongoManager.paginate({}, { page, limit });
    return response; 
  } catch (error) {
    return next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { pid } = req.query;
    const response = await productsMongoManager.read(pid);
    if (response) {
      return res.status(200).json({ message: "PRODUCT READ", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const data = req.body;
    const response = await productsMongoManager.update(pid, data);
    if (response) {
      return res
        .status(200)
        .json({ message: "PRODUCT UPDATE", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const response = await productsMongoManager.destroy(pid);
    if (response) {
      return res
        .status(200)
        .json({ message: "PRODUCT DELETED", response });
    } else {
      const error = new Error("PRODUCT NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
async function showHome(req, res, next) {
  try {
    const products = await productsMongoManager.readAll();
    return res.render("home.handlebars", { products });

  } catch (error) {
    next(error);
  }
}

async function showAdminPanel(req, res, next) {
  try {
    const products = await productsMongoManager.readAll();
    return res.render("admin.handlebars", { products });
  } catch (error) {
    next(error);
  }
}

async function showpaginated(req, res, next) {
  try {
    let filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const options = {
      page: req.query.page || 1,
      limit: 6,
    };
    const responseMongo = await productsMongoManager.paginate(filter, options);
    if (responseMongo.docs.length > 0) {
      return res.render("home.handlebars", { 
        products: responseMongo.docs, 
        hasPrevPage: responseMongo.hasPrevPage, 
        prevPage: responseMongo.prevPage, 
        hasNextPage: responseMongo.hasNextPage, 
        nextPage: responseMongo.nextPage, 
        page: responseMongo.page, 
        totalPages: responseMongo.totalPages 
      });
    } else {
      const error = new Error("NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};

export { create, readAll, paginate, read, update, destroy, showHome, showAdminPanel, showpaginated };
