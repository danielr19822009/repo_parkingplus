//  Archivo Model | parqueadero

//importos desde el schema de usuarios
import parqueaderoSchema from "../schemas/parqueadero.js";

class parqueaderoModelo {
  //metodo para crear un parqueadero
  async crearparqueadero(parqueaderodata) {
    return await parqueaderoSchema.create(parqueaderodata);
  }

  //update metodo para actualizar un parqueadero
  async updateparqueadero(id, parqueadero) {
    return await parqueaderoSchema.findOneAndUpdate(id, parqueadero, { new: true });
  }

  //eliminar parqueadero
  async eliminarparqueadero(id) {
    return await parqueaderoSchema.findOneAndDelete(id);
  }

  //creo el metodos para obtener todos los parqueaderos
  async getparqueaderoAll() {
    return await parqueaderoSchema.find();
  }

  //obtener un solo parqueadero
  async getparqueaderoOne(id) {
    return await parqueaderoSchema.findById(id);
  }
}

export default new parqueaderoModelo();