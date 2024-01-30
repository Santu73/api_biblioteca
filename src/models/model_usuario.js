const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Biblioteca');
};


const UsuarioSchema = new mongoose.Schema({
    username: String,
    password: String
}, { collection: 'Usuarios' });
  

const Usuario = mongoose.model('Usuario', UsuarioSchema);
  
module.exports = Usuario;