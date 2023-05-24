var express = require('express');
var router = express.Router();
var ctrlProducts = require('../Controller/productoController');

//
router.get('/getProducto/:productId', ctrlProducts.getProducto);

module.exports = router;