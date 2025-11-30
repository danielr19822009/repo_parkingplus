
import proyecto from '../controllers/proyecto.js';
import express from 'express';

const route = express.Router();

//obtiene la ruta para mostrar el home el cual se define desde el archivo proyecto.js de la carpeta controller
route.get('/', proyecto.home);

//obtiene la ruta para mostrar el login el cual se define desde el archivo proyecto.js de la carpeta controller
route.get('/login', proyecto.login);

//obtiene la ruta para mostrar el registro de usuario el cual se define desde el archivo proyecto.js de la carpeta controller
route.get('/registrousuario', proyecto.registrousuario);

//obtiene la ruta para mostrar de menu principal el cual se define desde el archivo proyecto.js de la carpeta controller
route.get('/nosotros', proyecto.contactenos);

//obtiene la ruta para mostrar de menu principal el cual se define desde el archivo proyecto.js de la carpeta controller
route.get('/menu', proyecto.menu);

//obtiene la ruta para mostrar menuparqueadero el cual se define desde el archivo proyecto.js de la carpeta controller
route.get('/menuparqueadero', proyecto.parqueadero);

//obtiene la ruta para mostrar crear parqueadero el cual se define desde el archivo proyecto.js  de la carpeta controller
route.get('/crearparqueadero', proyecto.crearparqueadero)



export default route;