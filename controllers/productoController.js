const { default: mongoose } = require('mongoose');
const RopaModel = require('../models/ropa')

getProducto = function (req, res) {
    if (req.Params && req.Params.productId) {
        RopaModel.findById(req.params.productId)
            .exec(function (err, product) {
                sendJsonResponse(res, 200, product)
            });
    } else {
        res.status(404).send({
            "Message": "No existe tal producto;"
        })
    }
}
crearPrenda = function (req, res) {
    const documento = new RopaModel({
        stock: req.body.stock,
        lanzamiento: req.body.lanzamiento,
        precio: req.body.precio,
        caracteristicas: req.body.caracteristicas
    });

    documento.save().then((nuevaPrenda) => {
        console.log('Documento insertado correctamente:', nuevaPrenda);
        res.status(200).json(nuevaPrenda);
    })
        .catch((err) => {
            console.log('Error al insertar el documento:', err);
            res.status(400).json(err);
        });
}

module.exports = {
    crearPrenda,
    getProducto
}
