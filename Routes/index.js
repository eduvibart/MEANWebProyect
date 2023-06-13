var router = require('express').Router();
var ctrlProducts = require('../controllers/productoController');

//
router.get('/getProducto/:productId', ctrlProducts.getProducto);
router.post('/crearPrenda', ctrlProducts.crearPrenda);

module.exports = router;