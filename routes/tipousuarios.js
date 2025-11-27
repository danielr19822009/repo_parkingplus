//Archivo rutas | tipousuario

import express from 'express';
const route = express.Router();

//importo desde el controlador de usuarios
import usuarioTipoController from '../controllers/tipousuarios.js';


// Definir rutas para usuarios, 
// para crear usuarios
route.post('/',usuarioTipoController.crearTipoUsuario);

// para obtener todos los usuarios
route.get('/',usuarioTipoController.getTipoUsuarioAll);

// para obtener un usuario
route.get('/:id',usuarioTipoController.getTipoUsuarioOne);

// para actualizar usuarios
route.put('/:id',usuarioTipoController.updateTipoUsuario);

// para eliminar usuarios
route.delete('/:id',usuarioTipoController.eliminarTipoUsuario);

export default route;