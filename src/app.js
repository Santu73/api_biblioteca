const express = require('express');

const { auth } = require('express-oauth2-jwt-bearer');
const errorHandler = require('./middlewares/errorHandler');


require('dotenv').config();

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: 'RS256',
});


const app = express();
app.use(express.json());

// Importamos el Router de Libros y el Router de Usuarios
const librosRouter = require('./routes/libros');
const usuariosRouter = require('./routes/usuario');

//Configuramos el middleware de autenticacion
app.use('/api/libros', autenticacion,  librosRouter);
app.use('/api/usuarios', autenticacion, usuariosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

module.exports = app;

/* Implementar las siguientes rutas y funcionalidades, utilizando la herramienta de generación
de código Codeium:
a. GET /usuarios: Devuelve la lista completa de usuarios.
b. GET /usuarios/:id: Devuelve los detalles de un usuario específico según su ID.
c. POST /usuarios: Crea un nuevo usuario con la información proporcionada.
d. PUT /usuarios/:id: Actualiza la información de un usuario específico según su ID.
e. DELETE /usuarios/:id: Elimina un usuario específico según su ID. */