//Archivo de schema | celda
import { Timestamp } from "mongodb";
import mongoose from "mongoose";

//definimos el schema de celda

const celdaSchema = new mongoose.Schema(
  {
    //campos de la colecion de celda
    cod_celda: { type: Number, require: true },
    nombre_celda: { type: String, require: true },
    descripcion_celda: { type: String, require: true },
    cod_vehiculo: { type: Number },
  },
  { timestamps: true }
);

//exporta mos el modelo y forzamos el nombre de la coleccion
export default mongoose.model("celda", celdaSchema, "celda");
