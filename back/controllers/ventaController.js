var ventas = require('./../models/venta');
var dateformat = require('dateformat');

exports.ventaNuevaMRBREAK = function(req, res, next){
    operacion.nuevaVentaMRBR(req,function(consulta){
        res.json(consulta);  
    });
}

exports.getOperaciones = function(req, res, next){
    operacion.getOperaciones(function(consulta){
        res.json(consulta);
    });
}

exports.getOperacionesPorFecha = function(req, res, next){
    var fechaInicio = '"'+req.body.fechaInicio+'"';
    var fechaFin = '"'+req.body.fechaFin+'"';
    operacion.getOperacionesPorFecha(fechaInicio,fechaFin,function(consulta){
        res.json(consulta);
    });
}

exports.getFechas = function(req, res, next){
    fechas.getFechas(function(consulta){
        res.json(consulta);
    });
}

exports.getComisiones = function(req, res, next){
    comisiones.getComisiones(function(consulta){
        res.json(consulta);
    });
}

exports.dameOperacion = function(req, res, next){
    var idOperacion = req.body.idOperacion;
    operacion.dameOperacion(idOperacion,function(consulta){
        res.json(consulta);
    });
}

exports.operacionBaja = function(req, res, next){
    var idOperacion = req.body.idOperacion;
    operacion.operacionBaja(idOperacion,function(consulta){
        res.json(consulta);
    });
}




