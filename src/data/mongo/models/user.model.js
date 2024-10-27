import { Schema, model } from "mongoose";
import mongoosePaginator from "mongoose-paginate-v2"

const collection = "users";
const schema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F69622%2Favatar&psig=AOvVaw2vNqIudPNt-_YrDTIC29JY&ust=1728516147154000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDW58n2_4gDFQAAAAAdAAAAABAE",
  },
  role: { type: String, enum: [0,1,2], default: 0, index: true},
});

schema.plugin(mongoosePaginator)
// le indico al schema que tiene habilitado ademas de todos los metodos de mongoose
// el método paginate() para poder paginar los documentos de la coleccion
const User = model(collection, schema);
export default User;