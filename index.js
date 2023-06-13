//Require expres con su debida configuración
var app = require('./app');
var connection = require('./connectionDb/connection')

// Constantes
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Start Servidor
const startServer = async () => {
    try {
        await connection;
        console.log('Conectado a la base de datos mongoDB correctamente ✔️');
    } catch (err) {
        console.error(`Error en la conexión a la base de datos`);
        console.error(err);
    }
    app.listen(
        PORT,
        console.log(`Server listen on port ${PORT}`)
    );
};
startServer();


