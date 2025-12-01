//Archivo controller | parqueadero
//importo desde el modelo la clase usuario
import Counter from "../schemas/counter.js";
import parqueaderoModel from "../models/parqueadero.js";

async function getNextSequence(name) {
  const counter = await Counter.findOneAndUpdate(
    { id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq;
}

class parqueaderoController {
  constructor() {}

  //metodos para crear una parqueadero de parqueadero
  async crearparqueadero(req, res) {
  try {
    // Generar el código incremental automáticamente
    const cod_parqueadero = await getNextSequence("parqueadero");
    const { nombreparqueadero, direccion, capacidad } = req.body;
    
    const parqueaderoData = await parqueaderoModel.crearparqueadero({
      cod_parqueadero,
      nombreparqueadero,
      direccion,
      capacidad,
    });
    res.status(201).json({ status: "Parqueadero Creado Ok", data: parqueaderoData });
  } catch (error) {
    res.status(500).send(error);
  }
}

  //metodo para actualizar un usuario
  async updateparqueadero(req, res) {
    try {
      const { id } = req.params;
      const parqueaderoData =  await parqueaderoModel.updateparqueadero(id, req.body); //creo una constante que llame al metodo updateparqueadero del modelo
      res.status(200).json({ status: "parqueadero Actualizado Ok", data: parqueaderoData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para eliminar un parqueadero
  async eliminarparqueadero(req, res) {
    try {
      const { id } = req.params;
      const parqueaderoData =  await parqueaderoModel.eliminarparqueadero(id); //creo una constante que llame al metodo eliminarparqueadero del modelo
      res.status(200).json({ status: "Eliminar parqueadero Ok", data:parqueaderoData });
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener todas las mascotas
  async getparqueaderoAll(req, res) {
    try {
      const parqueaderoData =  await parqueaderoModel.getparqueaderoAll(); //creo una constante que llame al metodo getparqueaderoAll   del modelo
      res.status(200).json({ status: "Todss Los parqueaderos Ok", data: parqueaderoData }); //retorno todos los parqueaderos encontrados
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }

  //metodo para obtener un solo parqueadero
  async getparqueaderoOne(req, res) {
    try {
      const {id} = req.params; //desestructuro el id de los parametros
      const parqueaderoData = await parqueaderoModel.getparqueaderoOne(id); //creo una constante que llame al metodo getparqueaderoOne del modelo y le apso el id por parametros
      res.status(200).json({ status: "Obtener Una parqueadero Ok", data: parqueaderoData }); //retorno el parqueadero encontrado
    } catch (error) {
      res.status(500).json({ status: "Error", message: error.message });
    }
  }
}

export default new parqueaderoController();