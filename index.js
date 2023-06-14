//Require expres con su debida configuración
var app = require('./app');
var connectToDatabase = require('./connectionDb/connection');


// Constantes
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Start Servidor
const startServer = async () => {
    
    await connectToDatabase();
    app.listen(
        PORT,
        console.log(`Server listen on port ${PORT}`)
    );
};
startServer();


