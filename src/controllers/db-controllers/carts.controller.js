import cartsMongoManager from "../../data/mongo/managers/cart.manager.js";
import productsMongoManager from "../../data/mongo/managers/product.manager.js";


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

const addToCart = async (req, res, next) => {
    try {
        const productId = req.params.productId; // ID del producto
        const userId = req.user ? req.user._id : null; // Obtén el ID del usuario si está autenticado

        // Primero, busca el producto en la base de datos para obtener su información
        const product = await productsMongoManager.read(productId);
        if (!product) {
            return res.status(404).json({ message: "PRODUCT NOT FOUND" });
        }

        if (!userId) {
            // Si el usuario no está autenticado, redirige a la página de inicio de sesión
            return res.redirect('/login'); // Cambia esto según tu ruta de inicio de sesión
        }

        // Busca el carrito del usuario
        let cart = await cartsMongoManager.readByUserId(userId);

        if (!cart) {
            // Si no existe el carrito, crea uno nuevo
            cart = await cartsMongoManager.create({ user_id: userId, products: [] });
        }

        // Agrega el producto al carrito
        const cartItem = {
            product_id: product._id,
            title: product.title,
            price: product.price,
            quantity: 1 // Puedes ajustar la cantidad según sea necesario
        };

        // Lógica para agregar el producto al carrito
        await cartsMongoManager.addProductToCart(cart._id, cartItem);

        return res.redirect(`/carts/${cart._id}`);
    } catch (error) {
        return next(error);
    }
};

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



async function cartsView(req, res, next) {
    try {
        const { cid } = req.params;
        const responseMongo = await cartsMongoManager.read(cid);
        if (responseMongo) {
            const totalResponse = await cartsMongoManager.calculateTotal(responseMongo.user_id); 
            const total = totalResponse.total;
            return res.render("carts", {
                product: responseMongo.product_id,
                userId: responseMongo.user_id.email,
                quantity: responseMongo.quantity,
                price: responseMongo.price,
                total: total
            });
        } else {
            const error = new Error("CART NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}




export { create, readAll, read, update, destroy, calculateTotal, cartsView, addToCart }