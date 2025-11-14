
import proyecto from '../controllers/proyecto.js';
import express from 'express';

const route = express.Router();

route.get('/', proyecto.home);
route.get('/nosotros', proyecto.contactenos);

export default route;