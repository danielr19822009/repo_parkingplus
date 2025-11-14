//Archivo controller | tipoUsuario


//importo desde el modelo la clase tipoUsuario
import usuarioModel from "../models/tipousuarios.js";

class tipoUsuarioController {
  constructor() {}

  //metodos para crear un usuario
  async crearTipoUsuario(req, res) {
    try {
      const tipoUsuarioData = await usuarioModel.crearTipoUsuario(req.body);
      console.log("TipoUsuario creado:", tipoUsuarioData);
      res.status(201).json({ status: "Crear Ok", data: tipoUsuarioData });
    } catch (error) {
      res.status(500).send(error)
    }
  }

  //metodo para actualizar un usuario
  async updateTipoUsuario(req, res) {
    try {
      const { id } = req.params;
      const tipoUsuariosdata =  await usuarioModel.updateTipoUsuario(id, req.body); //creo una constante que llame al metodo updateUsuario del modelo
      res.status(200).json({ status: "Tipo Usuario Update Ok", data: tipoUsuariosdata });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un usuario
  async eliminarTipoUsuario(req, res) {
    try {
      const { id } = req.params;
      const tipoUsuariosdata =  await usuarioModel.eliminarTipoUsuario(id); //creo una constante que llame al metodo eliminarUsuario del modelo
      res.status(200).json({ status: "Tipo Usuario Eliminado Ok", data:tipoUsuariosdata });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getTipoUsuarioAll(req, res) {
    try {
      const tipoUsuariosdata =  await usuarioModel.getTipoUsuarioAll(); //creo una constante que llame al metodo getUsuarioAll   del modelo
      res.status(200).json({ status: "Todos Los Tipos de Usuario Ok", data: tipoUsuariosdata }); //retorno todos los usuarios encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo usuario
  async getTipoUsuarioOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const tipoUsuarioData = await usuarioModel.getTipoUsuarioOne(id); //creo una constante que llame al metodo getUsuarioOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Un Tipo Usuario Obtenido Ok", data: tipoUsuarioData }); //retorno el usuario encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}
    
export default new tipoUsuarioController();