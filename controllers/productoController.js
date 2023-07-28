const { default: mongoose } = require('mongoose');
const RopaModel = require('../models/ropa')

getAllProductos = function(req, res) {
    RopaModel.find({})
      .then((productos) => {
        console.log('Productos encontrados:', productos);
        res.status(200).json(productos);
      })
      .catch((err) => {
        console.log('Error al obtener los productos:', err);
        res.status(500).json(err);
      });
}

getProducto = function (req, res) {
    const codigoArticulo = req.params.codigoArticulo;

    RopaModel.findOne({ codigoArticulo: codigoArticulo })
        .then((producto) => {
            if (producto) {
                console.log('Producto encontrado:', producto);
                res.status(200).json(producto);
            } else {
                console.log('No se encontró ningún producto con el código de artículo:', codigoArticulo);
                res.status(404).json({ error: 'No se encontró ningún producto con el código de artículo proporcionado' });
            }
        })
        .catch((err) => {
            console.log('Error al obtener el producto:', err);
            res.status(500).json(err);
        });
};

deleteProducto = function (req, res) {
    const codigoArticulo = req.params.codigoArticulo;

    RopaModel.findOneAndDelete({ "codigoArticulo": codigoArticulo })
        .then((productoEliminado) => {
            if (productoEliminado) {
                console.log('Producto eliminado:', productoEliminado);
                res.status(200).json(productoEliminado);
            } else {
                console.log('No se encontró ningún producto con el código de artículo:', codigoArticulo);
                res.status(404).json({ error: 'No se encontró ningún producto con el código de artículo proporcionado' });
            }
        })
        .catch((err) => {
            console.log('Error al eliminar el producto:', err);
            res.status(500).json(err);
        });
};

crearPrenda = function (req, res) {
    try {
        const documento = new RopaModel({
            codigoArticulo: req.body.codigoArticulo,
            stock: req.body.stock,
            lanzamiento: req.body.lanzamiento,
            precio: req.body.precio,
            caracteristicas: req.body.caracteristicas
        });

        RopaModel.findOne({ codigoArticulo: documento.codigoArticulo })
            .then((articuloExistente) => {
                if (articuloExistente) {
                    console.log('Ya existe un documento con el mismo Codigo de Articulo:', articuloExistente);
                    res.status(400).json({ error: 'Ya existe un artículo con el mismo Codigo de Articulo' });
                } else {
                    return documento.save();
                }
            })
            .then((nuevaPrenda) => {
                console.log('Documento insertado correctamente:', nuevaPrenda);
                res.status(200).json(nuevaPrenda);
            })
            .catch((err) => {
                console.log('Error al insertar el documento:', err);
                res.status(500).json(err);
            });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

updateProducto = function (req, res) {
    const codigoArticulo = req.params.codigoArticulo;
    const updatedData = req.body;

    RopaModel.findOneAndUpdate({ 'codigoArticulo': codigoArticulo }, updatedData, { new: true })
        .then((productoActualizado) => {
            if (productoActualizado) {
                console.log('Producto actualizado:', productoActualizado);
                res.status(200).json(productoActualizado);
            } else {
                console.log('No se encontró ningún producto con el código de artículo:', codigoArticulo);
                res.status(404).json({ error: 'No se encontró ningún producto con el código de artículo proporcionado' });
            }
        })
        .catch((err) => {
            console.log('Error al actualizar el producto:', err);
            res.status(500).json(err);
        });
};


module.exports = {
    crearPrenda,
    updateProducto,
    deleteProducto,
    getProducto,
    getAllProductos
}
