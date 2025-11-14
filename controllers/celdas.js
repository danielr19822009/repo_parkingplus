//Archivo controller | celda
//importo desde el modelo la clase usuario
import celdaModel from "../models/celdas.js";

class celdaController {
  constructor() {}

  //metodos para crear una celda de parqueadero
  async crearCelda(req, res) {
    try {
      const celdaData = await celdaModel.crearCelda(req.body);
      console.log("Celda Creada:", celdaData);
      res.status(201).json({ status: "Crear Ok", data: celdaData });
    } catch (error) {
      res.status(500).send(error)
    }
  }

  //metodo para actualizar un usuario
  async updateCelda(req, res) {
    try {
      const { id } = req.params;
      const celdaData =  await celdaModel.updateCelda(id, req.body); //creo una constante que llame al metodo updatecelda del modelo
      res.status(200).json({ status: "celda Actualizado Ok", data: celdaData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un celda
  async eliminarCelda(req, res) {
    try {
      const { id } = req.params;
      const celdaData =  await celdaModel.eliminarCelda(id); //creo una constante que llame al metodo eliminarcelda del modelo
      res.status(200).json({ status: "Eliminar Celda Ok", data:celdaData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getCeldaAll(req, res) {
    try {
      const celdaData =  await celdaModel.getCeldaAll(); //creo una constante que llame al metodo getceldaAll   del modelo
      res.status(200).json({ status: "Todss Los celdas Ok", data: celdaData }); //retorno todos los celdas encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo celda
  async getCeldaOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const celdaData = await celdaModel.getCeldaOne(id); //creo una constante que llame al metodo getceldaOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Obtener Una Celda Ok", data: celdaData }); //retorno el celda encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}

export default new celdaController();