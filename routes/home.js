
import proyecto from '../controllers/proyecto.js';
import express from 'express';

const route = express.Router();

route.get('/', proyecto.home);
route.get('/login', proyecto.login);
route.get('/nosotros', proyecto.contactenos);
<<<<<<< HEAD
route.get('/parqueaderos', proyecto.parqueadero);
route.get('/menu', proyecto.menu);

=======
route.get('/menuparqueadero', proyecto.parqueadero);
route.get('/parqueadero/crearparqueadero', proyecto.crearparqueadero)
route.get('/menu', proyecto.menu);


>>>>>>> master
export default route;