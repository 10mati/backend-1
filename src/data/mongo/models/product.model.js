import { Schema, model } from "mongoose";
import mongoosePaginator from "mongoose-paginate-v2"

const collection = "products";
const schema = new Schema({
  title: { type: String, required: true, index: true },
  photo: {
    type: String,
    default:
      "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg",
  },
  category: { type: String, default: "celulares", index: true },
  price: { type: Number, default: 1, min: 0, max: 1000 },
  stock: { type: Number, default: 1, min: 0 },
});

schema.plugin(mongoosePaginator)
// le indico al schema que tiene habilitado ademas de todos los metodos de mongoose
// el método paginate() para poder paginar los documentos de la coleccion
// MINIMO PAGINAR PRODUCTOS
const Product = model(collection, schema);
export default Product;