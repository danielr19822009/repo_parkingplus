//archivo Scjema | cliente

import mongoose from "mongoose";

//se define el shema seguin como este construidos los campos en la bas de datos

const clientesSchema = new mongoose.Schema({

    //campos de la collecion de base de datos
    cod_cliente: { type: Number, required: true },
    nombre_cliente: { type: String, required: true },
    apellido_cliente: { type: String, required: true },
    documento_cliente: { type: String, required: true },
    correo_cliente: { type: String, required: true },
    celular: { type: String, required: true },
},
 { timestamps: true }
);

//exporta mos el modelo y forzamos el nombre de la coleccion
//importante para que no se cree otro nombre de doleecion
export default mongoose.model("cliente", clientesSchema, "cliente");