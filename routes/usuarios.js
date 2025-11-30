//Archivo rutas | usuario

import express from 'express';
const route = express.Router();

//importo desde el controlador de usuarios
import usuarioController from '../controllers/usuarios.js';

// Ruta registro usada desde el formulario
route.post('/registrousuario', usuarioController.crearUsuario);

// para crear usuarios general (opcional)
route.post('/', usuarioController.crearUsuario);

// para obtener todos los usuarios
route.get('/', usuarioController.getUsuariosAll);

// para obtener un usuario
route.get('/:id', usuarioController.getUsuarioOne);

// para actualizar usuarios
route.put('/:id', usuarioController.updateUsuario);

// para eliminar usuarios
route.delete('/:id', usuarioController.eliminarUsuario);

export default route;
