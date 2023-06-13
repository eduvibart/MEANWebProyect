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
    const { stock, lanzamiento, precio, caracteristicas } = req.body;

    nuevaPrenda = new RopaModel({
        stock: stock,
        lanzamiento: lanzamiento,
        precio: precio,
        caracteristicas: caracteristicas
    })

    nuevaPrenda.save().then((prendaCreada) => { res.status(200).json(prendaCreada); }).catch((error) => { res.status(400).json({ error: error.message }); });
}

module.exports = {
    crearPrenda,
    getProducto
}
