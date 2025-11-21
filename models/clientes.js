//  Archivo Modelo | Cliente

//importos desde el schema de cliente
import ClienteSchema from "../schemas/clientes.js";

class clienteModelo {
  //metodo para crear un cliente
  async crearCliente(clientedata) {
    return await ClienteSchema.create(usuariodata);
  }

  //update metodo para actualizar un cliente
  async updateCliente(id, cliente) {
    return await ClienteSchema.findOneAndUpdate(id, cliente, { new: true });
  }

  //eliminar usuario
  async eliminarCliente(id) {
    return await ClienteSchema.findOneAndDelete(id);
  }

  //creo el metodos para obtener todos los cliente
  async getClienteAll() {
    return await ClienteSchema.find();
  }

  //obtener un solo cliente
  async getClienteOne(id) {
    return await ClienteSchema.findById(id);
  }
}

export default new clienteModelo();