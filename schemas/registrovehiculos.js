import mongoose from "mongoose";

const registroVehiculoSchema = new mongoose.Schema(
  {
    cod_registrovehiculo: {
      type: Number,
      required: true,
    },

    hora_entrada: {
      type: Date,
      required: true,
    },

    fecha_salida: {
      type: Date,
      default: null,
    },

    total_pagar: {
      type: Number,
      default: 0,
    },

    cod_vehiculo: {
      type: String,
      enum: ["Moto", "Carro"],
      required: true,
    },

    cod_usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    placaVehiculo: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model(
  "registrovehiculo",
  registroVehiculoSchema,
  "registrovehiculo"
);
