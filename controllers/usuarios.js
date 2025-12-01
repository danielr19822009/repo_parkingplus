//Archivo controller | celda
//importo desde el modelo la clase usuario
import UsuarioModelo from "../models/usuarios.js";
import Counter from "../schemas/counter.js";


async function getNextSequence(name) {
  const counter = await Counter.findOneAndUpdate(
    { id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq;
}


class usuarioController {
  constructor() {}

  // Métodos para crear un usuario
async crearUsuario(req, res) {
    try {

        // Generar el código incremental automático
        const cod_usuario = await getNextSequence("usuario");

        // Armar el body final
        const dataUsuario = { 
            ...req.body, 
            cod_usuario 
        };
        const usuarioCreado = await UsuarioModelo.crearUsuario(dataUsuario);
        console.log("Usuario Creado:", usuarioCreado);
        res.status(201).json({
            status: "Usuario Creado OK",
            data: usuarioCreado
        });

    } catch (error) {
        console.error("Error creando usuario:", error);
        res.status(500).json({ status: "ERROR", message: error.message });
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