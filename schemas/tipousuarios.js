//Archivo de schema | tipo Usuario
import { Timestamp } from "mongodb";
import mongoose from "mongoose";

//definimos el schema de tipo usuario

const tipoUsuarioSchema = new mongoose.Schema(
  {
    //campos de la colecion de tipo usuario
    
cod_tipousuario: { type: Number, required: true },
nombre_tipousuario: { type: String, required: true },
descripcion_tipousuario: { type: String, required: true },
  },
  { timestamps: true }
);

//exporta mos el modelo y forzamos el nombre de la coleccion
export default mongoose.model("tipousuario", tipoUsuarioSchema, "tipousuario");
