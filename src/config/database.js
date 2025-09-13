import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabasediegogarcia");
    // para borrar toda la base de datos
    // await mongoose.connection.dropDatabase();
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
  }
};