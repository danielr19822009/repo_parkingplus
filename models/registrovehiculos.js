//  Archivo Model | registro vehiculos

//importos desde el schema de registro vehiculos
import registroVehiculosSchema from "../schemas/registrovehiculos.js";

class registroVehiculomodelo {
  //metodo para crear un usuario
  async crearregistrovehiculo(registrovehiculodata) {
    return await registroVehiculosSchema.create(registrovehiculodata);
  }

  //update metodo para actualizar un registrovehiculo
  async updateregistrovehiculo(id, registrovehiculo) {
    return await registroVehiculosSchema.findOneAndUpdate(id, registrovehiculo, { new: true });
  }

  //eliminar registrovehiculo
  async eliminarregistrovehiculo(id) {
    return await registroVehiculosSchema.findOneAndDelete(id);
  }

  //creo el metodos para obtener todos los registrovehiculos
  async getregistrovehiculoAll() {
    return await registroVehiculosSchema.find();
  }

  //obtener un solo registrovehiculo
  async getregistrovehiculoOne(id) {
    return await registroVehiculosSchema.findById(id);
  }
}

export default new registroVehiculomodelo();