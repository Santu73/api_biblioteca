const Usuario = require("../models/model_usuario");

// GET /usuarios: Devuelve la lista completa de usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

// GET /usuarios/:id: Devuelve los detalles de un usuario específico según su ID.
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};
// POST /usuarios: Crea un nuevo usuario con la información proporcionada.
exports.createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

// PUT /usuarios/:id: Actualiza la información de un usuario específico según su ID.
exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

// DELETE /usuarios/:id: Elimina un usuario específico según su ID.
exports.deleteUsuario = async (req, res) => {
  try {
    const usuarioId = req.params.id;

    const usuarioEliminado = await Usuario.findByIdAndRemove(usuarioId);

    res.status(200).json(usuarioEliminado);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};