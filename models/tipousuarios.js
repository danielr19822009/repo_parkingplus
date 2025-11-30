//  Archivo Model | tipo Usuario

//importos desde el schema los tipos de tipo Usuario
import tiposUsuarioSchema from "../schemas/tipousuarios.js";

class tipoUsuarioModelo {
  //metodo para crear un usuario
  async crearTipoUsuario(tipoUsuariodata) {
    return await tiposUsuarioSchema.create(tipoUsuariodata);
  }

  //update metodo para actualizar un tipo Usuario
  async updateTipoUsuario(id, tipoUsuario) {
    return await tiposUsuarioSchema.findOneAndUpdate(id, tipoUsuario, { new: true });
  }

  //eliminar usuario
  async eliminarTipoUsuario(id) {
    return await tiposUsuarioSchema.findOneAndDelete(id);
  }

  //creo el metodos para obtener todos los tipo Usuario
  async getTipoUsuarioAll() {
    return await tiposUsuarioSchema.find();
  }

  //obtener un solo tipo Usuario
  async getTipoUsuarioOne(id) {
    return await tiposUsuarioSchema.findById(id);
  }
}

export default new tipoUsuarioModelo();