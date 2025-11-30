//Archivo de schema | parqueadero
import { Timestamp } from "mongodb";
import mongoose from "mongoose";

//definimos el schema de parqueadero

const parqueaderoSchema = new mongoose.Schema(
  {
    //campos de la colecion de parqueadero
    cod_parqueadero: { type: Number, require: true },
    nombreparqueadero: { type: String, require: true },
    direccion: { type: String, require: true },
    capacidad: { type: Number ,require: true},
  },
  { timestamps: true }
);

//exporta mos el modelo y forzamos el nombre de la coleccion
export default mongoose.model("parqueadero", parqueaderoSchema, "parqueadero");