//Archivo rutas | registro vehiculos

import express from 'express';
const route = express.Router();

//importo desde el controlador de registro vehiculos
import registroVehiculosController from '../controllers/registrovehiculos.js';


// Definir rutas para registro vehiculos, 

// para crear usuarios
route.post('/',registroVehiculosController.crearRegistroVehiculo);

// para obtener todos los registrovehiculos del metodo del modelo
route.get('/',registroVehiculosController.getregistrovehiculoAll);

// para obtener un registrovehiculo
route.get('/:id',registroVehiculosController.getregistrovehiculoOne);

// para actualizar registrovehiculos
route.put('/:id',registroVehiculosController.updateregistrovehiculo);

// para eliminar registrovehiculos
route.delete('/:id',registroVehiculosController.eliminarregistrovehiculo);

export default route;