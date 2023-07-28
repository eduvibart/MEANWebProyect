//Configuración app
var express = require('express');
var app = express();
app.use(express.json());

// Ruta para servir la aplicación Angular (frontend)
app.use(express.static(__dirname + '/front'));

// Ruta para la API (si es que tienes endpoints para la API)
var routes = require('./Routes/index')
app.use("/api", routes);


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/front/index.html');
});

module.exports = app;

