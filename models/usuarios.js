import usuarioSchema from "../schemas/usuarios.js";

class UsuarioModelo {

    static async crearUsuario(data) {
        return usuarioSchema.create(data);
    }

    static async getUsuariosAll() {
        return usuarioSchema.find();
    }

    static async getUsuarioOne(id) {
        return usuarioSchema.findById(id);
    }

    static async updateUsuario(id, body) {
        return usuarioSchema.findByIdAndUpdate(id, body, { new: true });
    }

    static async eliminarUsuario(id) {
        return usuarioSchema.findByIdAndDelete(id);
    }
}

export default UsuarioModelo;
