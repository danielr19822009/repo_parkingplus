//  Archivo Model | Celda

//importos desde el schema de usuarios
import celdaSchema from "../schemas/celdas.js";

class celdaModelo {
  //metodo para crear un celda
  async crearCelda(celdadata) {
    return await celdaSchema.create(celdadata);
  }

  //update metodo para actualizar un celda
  async updateCelda(id, celda) {
    return await celdaSchema.findOneAndUpdate(id, celda, { new: true });
  }

  //eliminar celda
  async eliminarCelda(id) {
    return await celdaSchema.findOneAndDelete(id);
  }

  //creo el metodos para obtener todos los celdas
  async getCeldaAll() {
    return await celdaSchema.find();
  }

  //obtener un solo celda
  async getCeldaOne(id) {
    return await celdaSchema.findById(id);
  }
}

export default new celdaModelo();