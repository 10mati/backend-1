import cartsMongoManager from "../../data/mongo/managers/cart.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body
        const response = await cartsMongoManager.create(data)
        return res.status(201).json({
            message: "CART CREATED",
            response: response._id
        })
    } catch (error) {
        return next(error)
    }
}
const readAll = async (req, res, next) => {
    try {
        const filter = req.query
        const response = await cartsMongoManager.readAll(filter)
        if (response.length > 0) {
            return res.status(200).json({ message: "CARTS READ", response });
        } else {
            const error = new Error("CARTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const read = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const response = await cartsMongoManager.read(cid);
        if (response) {
            return res.status(200).json({ message: "CART READ", response });
        } else {
            const error = new Error("CART NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const update = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const data = req.body;
        const response = await cartsMongoManager.update(cid, data);
        if (response) {
            return res
                .status(200)
                .json({ message: "CART UPDATE", response });
        } else {
            const error = new Error("CART NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const destroy = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const response = await cartsMongoManager.destroy(cid);
        if (response) {
            return res
                .status(200)
                .json({ message: "CART DELETED", response });
        } else {
            const error = new Error("CART NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error)
    }
}
const calculateTotal = async (req, res, next) => {
    try {
        const { uid } = req.params;
        const response = await cartsMongoManager.calculateTotal(uid)
        return res.status(200).json({ response })
    } catch (error) {
        return next(error)
    }
}

 /*async function cartsView(req, res, next) {
    try {
        const { cid } = req.params;
        if (req.query.car_id) {
            filter.car_id = req.query.car_id;
        }
        const responseMongo = await cartsMongoManager.read(cid)
        console.log(responseMongo);
        if (responseMongo) {
            return res.render("carts", { data: responseMongo })
        } else {
            const error = new Error("CART NOT FOUND")
            error.statusCode = 404;
            throw error
        }

    } catch (error) {
        return next(error)
    }
}*/

async function cartsView(req, res, next) {
    try {
        const { cid } = req.params; // Obtén el ID del carrito desde los parámetros
        const responseMongo = await cartsMongoManager.read(cid); // Busca el carrito por su ID
        console.log(responseMongo);
        if (responseMongo) {
            return res.render("carts", { data: responseMongo }); // Renderiza la vista con los datos del carrito
        } else {
            const error = new Error("CART NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}




export { create, readAll, read, update, destroy, calculateTotal, cartsView}