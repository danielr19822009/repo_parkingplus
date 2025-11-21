//Archivo controller | Cliente
//importo desde el modelo la clase usuario
import clienteModelo from "../models/clientes.js";

class clienteController {
  constructor() {}

  //metodos para crear un usuario
  async crearCliente(req, res) {
    try {
      const clienteData = await clienteModelo.crearCliente(req.body);
      console.log("Cliente creado:", clienteData);
      res.status(201).json({ status: "Cliente Creado Ok", data: clienteData });
    } catch (error) {
      res.status(500).send(error)
    }
  }

  //metodo para actualizar un usuario
  async updateCliente(req, res) {
    try {
      const { id } = req.params;
      const clienteData =  await clienteModelo.updateCliente(id, req.body); //creo una constante que llame al metodo updateUsuario del modelo
      res.status(200).json({ status: "Cliente Actualizado Ok", data: clienteData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un usuario
  async eliminarCliente(req, res) {
    try {
      const { id } = req.params;
      const clienteData =  await clienteModelo.eliminarCliente(id); //creo una constante que llame al metodo eliminarUsuario del modelo
      res.status(200).json({ status: "Cliente Eliminar Ok", data:clienteData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getClienteAll(req, res) {
    try {
      const clienteData =  await clienteModelo.getClienteAll(); //creo una constante que llame al metodo getUsuarioAll   del modelo
      res.status(200).json({ status: "Todos Los Clientes Ok", data: clienteData }); //retorno todos los usuarios encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo usuario
  async getClienteOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const clienteData = await clienteModelo.getClienteOne(id); //creo una constante que llame al metodo getUsuarioOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Cliente Uno Ok", data: clienteData }); //retorno el usuario encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}

export default new clienteController();