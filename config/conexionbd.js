import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/parkingplus?retryWrites=true&w=majority`;

    await mongoose.connect(MONGO_URI);

    console.log(
      `🍃 Conectado correctamente a MongoDB Atlas,Base de Datos: ${process.env.BASEDATOS}`
    );
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
