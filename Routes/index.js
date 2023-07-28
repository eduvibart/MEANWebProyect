var router = require('express').Router();
var ctrlProducts = require('../controllers/productoController');

//
router.get('/getProducto/:codigoArticulo', ctrlProducts.getProducto);
router.post('/crearPrenda', ctrlProducts.crearPrenda);
router.delete('/deleteProducto/:codigoArticulo', ctrlProducts.deleteProducto);
router.put('/productos/:codigoArticulo',ctrlProducts.updateProducto);
router.get('/getProductos', ctrlProducts.getAllProductos);


module.exports = router;