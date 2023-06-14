// connection.js
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log('Conectado a la base de datos mongoDB correctamente ✔️');
  } catch (err) {
    console.error(`Error en la conexión a la base de datos`);
    console.error(err);
  }
};

module.exports = connectToDatabase;
