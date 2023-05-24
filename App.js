
var express = require('express');
var app = express();

const PORT = 3000; 


var routes = require('./Routes/index');
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("<h2>Página inicial cargada!</h2>");
});

app.listen(PORT, () => {
    console.log(`🛸 API is listening on port ${PORT}`);
});
