//Archivo rutas | usuario

import express from 'express';
const route = express.Router();

//importo desde el controlador de usuarios
import usuarioController from '../controllers/usuarios.js';


// Definir rutas para usuarios, 

// para crear usuarios
route.post('/',usuarioController.crearUsuario);

// para obtener todos los usuarios
route.get('/',usuarioController.getUsuarioAll);

// para obtener un usuario
route.get('/:id',usuarioController.getUsuarioOne);

// para actualizar usuarios
route.put('/:id',usuarioController.updateUsuario);

// para eliminar usuarios
route.delete('/:id',usuarioController.eliminarUsuario);

export default route;