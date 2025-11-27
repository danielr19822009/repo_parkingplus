//  Archivo Model | Usuario

//importos desde el schema de usuarios
import usuarioSchema from "../schemas/usuarios.js";

class usuarioModelo {
  //metodo para crear un usuario
  async crearUsuario(usuariodata) {
    return await usuarioSchema.create(usuariodata);
  }

  //update metodo para actualizar un usuario
  async updateUsuario(id, usuario) {
    return await usuarioSchema.findOneAndUpdate(id, usuario, { new: true });
  }

  //eliminar usuario
  async eliminarUsuario(id) {
    return await usuarioSchema.findOneAndDelete(id);
  }

  //creo el metodos para obtener todos los usuarios
  async getUsuariosAll() {
    return await usuarioSchema.find();
  }

  //obtener un solo usuario
  async getUsuarioOne(id) {
    return await usuarioSchema.findById(id);
  }
}

export default new usuarioModelo();