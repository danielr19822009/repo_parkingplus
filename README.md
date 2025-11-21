🚗 ParkingPlus – Backend
Daniel Jesús Rodríguez Londoño
Backend Developer – ParkingPlus

**Link Evidencia de consumo apis
**https://drive.google.com/file/d/19E4pm5Vxm3hX2Omc9fjA6l2U9Y2sABPA/view?usp=drive_link

Backend del sistema de gestión de parqueaderos ParkingPlus, desarrollado en Node.js, Express y MongoDB (Mongoose).

📌 Características principales

API REST construida con Express

Motor de plantillas Pug

Conexión a MongoDB Atlas usando Mongoose

Variables de entorno con dotenv

Scripts automáticos con Nodemon

Soporte para CORS y Body parser

Estructura del proyecto (recomendada)
parkingplus/
│
│   ├── controllers/
│   ├── routes/
    ├── Schemas/
│   ├── models/
│   ├── config/
│   └── app.js
│
│── .env
│── package.json
│── README.md

npm init -y
npm install
npm install nodemon --save-dev
npm install express
npm install pug
npm install dotenv
npm install mongoose
npm install mongodb

🍃 Conectado correctamente a MongoDB Atlas
Base de Datos: parkingplus
🚀 Servidor corriendo en puerto 3002
