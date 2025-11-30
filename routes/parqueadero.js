//Archivo rutas | parqueadero

import express from 'express';
const route = express.Router();
import parqueaderoController from '../controllers/parqueadero.js';

// Ruta POST que captura el formulario
route.post('/', parqueaderoController.crearparqueadero);

// Obtener todos los parqueaderos
route.get('/', parqueaderoController.getparqueaderoAll);

// Obtener un parqueadero por id
route.get('/:id', parqueaderoController.getparqueaderoOne);

// Actualizar parqueadero
route.put('/:id', parqueaderoController.updateparqueadero);

// Eliminar parqueadero
route.delete('/:id', parqueaderoController.eliminarparqueadero);

export default route;