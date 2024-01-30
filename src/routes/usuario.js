const express = require('express');
const router = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuarioController');

const { requiredScopes } = require('express-oauth2-jwt-bearer');

// Ruta para obtener todos los usuarios
router.get('/', requiredScopes('read:usuarios'), getAllUsuarios);

// Ruta para obtener un Usuario por id
router.get('/:id', requiredScopes('read:usuarios'), getUsuarioById);

// Ruta para crear un nuevo Usuario
router.post('/', requiredScopes('write:usuarios'), createUsuario);

// Ruta para actualizar un Usuario existente
router.put('/:id', requiredScopes('write:usuarios'), updateUsuario);

// Ruta para eliminar un Usuario
router.delete('/:id', requiredScopes('write:usuarios'), deleteUsuario);

module.exports = router;