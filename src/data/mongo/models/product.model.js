import { Schema, model } from "mongoose";
import mongoosePaginator from "mongoose-paginate-v2"

const collection = "products";
const schema = new Schema({
  title: { type: String, required: true, index: true },
  photo: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcovMeU1WX2DGX1vxh_mBjeQD5P3T0uZyEAk_kzjPSlxR_GcLAGVKE40CkLLNKvGhpAP8&usqp=CAU",
  
      
  },
  category: { type: String, default: "celulares", index: true },
  price: { type: Number, default: 1, min: 0, max: 1000 },
  stock: { type: Number, default: 1, min: 0 },
});

schema.plugin(mongoosePaginator)
const Product = model(collection, schema);
export default Product;