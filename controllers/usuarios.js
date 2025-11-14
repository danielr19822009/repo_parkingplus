//Archivo controller | Usuario
//importo desde el modelo la clase usuario
import usuarioModel from "../models/usuarios.js";

class usuarioController {
  constructor() {}

  //metodos para crear un usuario
  async crearUsuario(req, res) {
    try {
      const usuarioData = await usuarioModel.crearUsuario(req.body);
      console.log("Usuario creado:", usuarioData);
      res.status(201).json({ status: "Crear Ok", data: usuarioData });
    } catch (error) {
      res.status(500).send(error)
    }
  }

  //metodo para actualizar un usuario
  async updateUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuariosdata =  await usuarioModel.updateUsuario(id, req.body); //creo una constante que llame al metodo updateUsuario del modelo
      res.status(200).json({ status: "Actualizado Ok", data: usuariosdata });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un usuario
  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuariosdata =  await usuarioModel.eliminarUsuario(id); //creo una constante que llame al metodo eliminarUsuario del modelo
      res.status(200).json({ status: "Eliminar Ok", data:usuariosdata });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getUsuarioAll(req, res) {
    try {
      const usuariosdata =  await usuarioModel.getUsuarioAll(); //creo una constante que llame al metodo getUsuarioAll   del modelo
      res.status(200).json({ status: "Todos Los usuarios Ok", data: usuariosdata }); //retorno todos los usuarios encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo usuario
  async getUsuarioOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const usuarioData = await usuarioModel.getUsuarioOne(id); //creo una constante que llame al metodo getUsuarioOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Obtener Una Ok", data: usuarioData }); //retorno el usuario encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}

export default new usuarioController();