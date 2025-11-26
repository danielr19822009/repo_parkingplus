//Archivo de schema | Usuario
import { Timestamp } from "mongodb";
import mongoose from "mongoose";

//definimos el schema de usuarios

const usuarioSchema = new mongoose.Schema(
  {
    //campos de la colecion de usuarios
    cod_usuario: { type: Number, required: true },
    nombre_usuario: { type: String, required: true },
    apellido_usuario: { type: String, required: true },
    documento_usuario: { type: String, required: true },
    cod_tipousuario: { type: Number, required: true },
    correo_usuario: { type: String, required: true },
    celular: { type: String, required: true },
    clave:{type:String,required:true}

  },
  { timestamps: true }
);

//exporta mos el modelo y forzamos el nombre de la coleccion
export default mongoose.model("usuario", usuarioSchema, "usuario");
