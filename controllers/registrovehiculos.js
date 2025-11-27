//Archivo controller | registro vehiculo
//importo desde el modelo la clase registro vehiculo
import registrovehiculoModel from "../models/registrovehiculos.js";

class registroVehiculosController {
  constructor() {}

  //metodos para crear un registrovehiculo
  async crearRegistroVehiculo(req, res) {
    try {
      const registroVehiculoData = await registrovehiculoModel.crearregistrovehiculo(req.body);
      console.log("registrovehiculo creado:", registroVehiculoData);
      res.status(201).json({ status: "Crear Ok", data: registroVehiculoData });
    } catch (error) {
      res.status(500).send(error)
    }
  }
  

  //metodo para actualizar un registrovehiculo
  async updateregistrovehiculo(req, res) {
    try {
      const { id } = req.params;
      const registrovehiculosdata =  await registrovehiculoModel.updateregistrovehiculo(id, req.body); //creo una constante que llame al metodo updateregistrovehiculo del modelo
      res.status(200).json({ status: "Actualizado Ok", data: registrovehiculosdata });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un registrovehiculo
  async eliminarregistrovehiculo(req, res) {
    try {
      const { id } = req.params;
      const registrovehiculosdata =  await registrovehiculoModel.eliminarregistrovehiculo(id); //creo una constante que llame al metodo eliminarregistrovehiculo del modelo
      res.status(200).json({ status: "Eliminar Ok", data:registrovehiculosdata });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getregistrovehiculoAll(req, res) {
    try {
      const registrovehiculosdata =  await registrovehiculoModel.getregistrovehiculoAll(); //creo una constante que llame al metodo getregistrovehiculoAll   del modelo
      res.status(200).json({ status: "Todos Los registrovehiculos Ok", data: registrovehiculosdata }); //retorno todos los registrovehiculos encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo registrovehiculo
  async getregistrovehiculoOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const registrovehiculoData = await registrovehiculoModel.getregistrovehiculoOne(id); //creo una constante que llame al metodo getregistrovehiculoOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Obtener Una Ok", data: registrovehiculoData }); //retorno el registrovehiculo encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}

export default new registroVehiculosController();