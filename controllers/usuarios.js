//Archivo controller | celda
//importo desde el modelo la clase usuario
import UsuarioModelo from "../models/usuarios.js";

class usuarioController {
  constructor() {}

  //metodos para crear un usuario de parqueadero
  async crearUsuario(req, res) {
    try {
      const usuarioData = await UsuarioModelo.crearUsuario(req.body);
      console.log("Usuario Creado:", usuarioData);
      res.status(201).json({ status: "usuario Creado Ok", data: usuarioData });
    } catch (error) {
      res.status(500).send(error)
    }
  }

  //metodo para actualizar un usuario
  async updateUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuarioData =  await UsuarioModelo.updateUsuario(id, req.body); //creo una constante que llame al metodo updatecelda del modelo
      res.status(200).json({ status: "celda Actualizado Ok", data: usuarioData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un celda
  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuarioData =  await UsuarioModelo.eliminarUsuario(id); //creo una constante que llame al metodo eliminarcelda del modelo
      res.status(200).json({ status: "Usuario Eliminado", data:usuarioData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getUsuariosAll(req, res) {
    try {
      const usuarioData =  await UsuarioModelo.getUsuariosAll(); //creo una constante que llame al metodo getceldaAll   del modelo
      res.status(200).json({ status: "Todss Los usurios Ok", data: usuarioData }); //retorno todos los celdas encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo celda
  async getUsuarioOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const usuarioData = await UsuarioModelo.getUsuarioOne(id); //creo una constante que llame al metodo getceldaOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Un Usuario OK", data: usuarioData }); //retorno el celda encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}

export default new usuarioController();