const mongoose = require('mongoose');
const ropaSchema = new mongoose.Schema({
    stock: Number,
    lanzamiento: Date,
    precio: Number,
    caracteristicas: {
        tipo: String,
        talle: String,
        marca: String,
        modelo: String,
        color: String,
    }
});
// El modelo debe coincidir con el nombre de la colección dentro de la database (connectionDb/connection)
module.exports = mongoose.model("ropa", ropaSchema, "ropa"); 