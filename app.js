import 'dotenv/config';
import connectDB from './config/conexionbd.js';

import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

import usuarios from './routes/usuarios.js';
import tipoUsuarios from './routes/tipoUsuarios.js';
import homeroutes from './routes/home.js';
import celdas from './routes/celdas.js';
import registrovehiculos from './routes/registrovehiculos.js'
import clientes from './routes/clientes.js'

// Crear __dirname válido en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Motor de plantillas PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// creo las Rutas virtuales y asocio la importacion de la ruta
app.use('/usuarios', usuarios);
app.use('/tipousuarios', tipoUsuarios);
app.use('/celdas', celdas)
app.use('/registrovehiculos', registrovehiculos);
app.use('/clientes', clientes)

// Estas son tus rutas principales
app.use('/', homeroutes);

<<<<<<< HEAD
=======

>>>>>>> master
// Iniciar el servidor
async function iniciarServidor() {
    try {
        await connectDB();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error al iniciar servidor:", error);
        process.exit(1);
    }
}

iniciarServidor();

export default app;
