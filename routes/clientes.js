//Archivo rutas | Cliente

import express from 'express';
const route = express.Router();

//importo desde el controlador de usuarios
import clienteController from '../controllers/clientes.js';


// Definir rutas para usuarios, 

// para crear usuarios
route.post('/',clienteController.crearCliente);

// para obtener todos los usuarios
route.get('/',clienteController.getClienteAll);

// para obtener un usuario
route.get('/:id',clienteController.getClienteOne);

// para actualizar usuarios
route.put('/:id',clienteController.updateCliente);

// para eliminar usuarios
route.delete('/:id',clienteController.eliminarCliente);

export default route;