/***
 * @author Eduardo Vibart, Lautaro Lopez, Felipe Gonzalez
 * 
 * Representa un sistema de stocks de ropa
 */

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

const RopaModel = mongoose.model("Ropa", ropaSchema);


async function conect(){
    try{

        await mongoose.connect(uri);

        console.log("Conectado a la BD");

    }catch(error){

        console.error("Error al conectarse a la BD", error.message);

    }
}

async function disconnect() {
    try {
      await mongoose.disconnect();
      console.log('Desconectado de la base de datos');
    } catch (error) {
      console.error('Error al desconectarse de la base de datos', error.message);
    }
  }

