import { connect } from "mongoose";



async function dbConnect() {
    try {

      await connect(process.env.DB_LINK);
      console.log("MongoDB conectado");
    } catch (error) {
      console.log("Error de conexión a MongoDB:", error); 
    }
  }

export default dbConnect;