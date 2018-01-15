var express = require('express');
var router = express.Router();

var VentaController = require('./../controllers/ventaController');

router.post('/ventaNuevaMRBREAK', VentaController.ventaNuevaMRBREAK);


module.exports = router;
