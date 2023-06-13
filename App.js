//Configuración app
var express = require('express');
var app = express();
app.use(express.json());

// Cargamos las rutas
var routes = require('./Routes/index')
app.use("/api", routes);


app.get("/", (req, res) => {
    res.send("<h1>Página inicial cargada!</h1>");
});

module.exports = app;

