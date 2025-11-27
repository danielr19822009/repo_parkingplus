//Archivo rutas | celda

import express from 'express';
const route = express.Router();

//importo desde el controlador de usuarios
import celdaController from '../controllers/celdas.js';

// Definir rutas para celdas, 

// para crear celdas
route.post('/',celdaController.crearCelda);

// para obtener todos los celdas
route.get('/',celdaController.getCeldaAll);

// para obtener un celda
route.get('/:id',celdaController.getCeldaOne);

// para actualizar celdas
route.put('/:id',celdaController.updateCelda);

// para eliminar celdas
route.delete('/:id',celdaController.eliminarCelda);

export default route;