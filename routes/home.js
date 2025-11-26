
import proyecto from '../controllers/proyecto.js';
import express from 'express';

const route = express.Router();

route.get('/', proyecto.home);
route.get('/login', proyecto.login);
route.get('/nosotros', proyecto.contactenos);
route.get('/parqueaderos', proyecto.parqueadero);
route.get('/menu', proyecto.menu);

export default route;