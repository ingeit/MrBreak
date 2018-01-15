var mysql = require('mysql');
var env    = process.env.NODE_ENV || 'database',
    databaseConfig = require('./../config/' + env + '.js');

var connection = mysql.createConnection({
  host     : databaseConfig.host,
  user     : databaseConfig.user,
  password : databaseConfig.password,
  database : databaseConfig.database,
  timezone : 'utc'
});

exports.nuevaVentaMRBR = function(req,fn){

    var idCarrito = req.body.idCarrito;
    var idVendedor = req.body.idVendedor;
    var montoTotal = req.body.montoTotal;
    var cadena = '"'+req.body.cadena+'"';
    var fechaVenta = '"'+req.body.fechaVenta+'"';

    connection.query('call venta_nueva('+idCarrito+','+idVendedor+','+montoTotal+','+cadena+','+fechaVenta+')', function(err, rows){  
        if (err) {
          consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
          fn (consulta);  
      }else fn(rows[0]); 
        });
}

exports.getOperaciones = function(fn){
    connection.query('call operacion_listar_dia()', function(err, rows){  
            // console.log(rows[0]);
                if (err) fn (err);  
                else fn(rows[0]); 
            });
}

exports.getOperacionesPorFecha = function(fechaInicio,fechaFin,fn){
    connection.query('call operacion_listar_rango('+fechaInicio+','+fechaFin+')', function(err, rows){  
                if (err) fn (err);  
                else fn(rows[0]); 
            });
}

exports.dameOperacion = function(idOperacion,fn){
    connection.query('call operacion_dame('+idOperacion+')', function(err, rows){  
                if (err) fn (err);  
                else fn(rows[0]); 
            });
}

exports.operacionBaja = function(idOperacion,fn){
    connection.query('call operacion_baja('+idOperacion+')', function(err, rows){  
                if (err) fn (err);  
                else fn(rows[0]); 
            });
}


exports.getFechas = function(fn){
    connection.query('call dame_fechas()', function(err, rows){
                if (err) {
                    consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
                    fn (consulta);  
                }else fn(rows[0]); 
            });
}

exports.getComisiones = function(fn){
    connection.query('call dame_comisiones()', function(err, rows){  
                if (err) {
                    consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
                    fn (consulta);  
                }else fn(rows[0]); 
            });
}

exports.operacionNueva = function(oDniProfesional,oApellidoProfesional,oNombreProfesional,oMailProfesional,
        oDniCliente,oApellidoCliente,oNombreCliente,oTelefonoCliente,oMailCliente,oTarjeta,oImporteVenta,
        oImporteCobrar,oCuotas,oImporteCarga,oImporteCuota,oCodigoAuto,oCupon,oTipoTarjeta,fn){
        //     console.log(oDniProfesional,oApellidoProfesional,oNombreProfesional,oMailProfesional,
        // oDniCliente,oApellidoCliente,oNombreCliente,oTelefonoCliente,oMailCliente,oTarjeta,oImporteVenta,
        // oImporteCobrar,oCuotas,oImporteCarga,oImporteCuota,oCodigoAuto,oCupon);
    connection.query('call operacion_nueva('+oDniProfesional+','+oApellidoProfesional+','+oNombreProfesional+','+oMailProfesional+','+
        oDniCliente+','+oApellidoCliente+','+oNombreCliente+','+oTelefonoCliente+','+oMailCliente+','+oTarjeta+','+oImporteVenta+','+
        oImporteCobrar+','+oCuotas+','+oImporteCarga+','+oImporteCuota+','+oCodigoAuto+','+oCupon+','+oTipoTarjeta+')', function(err, rows){  
            if (err) {
              consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
              fn (consulta);  
          }else fn(rows[0]); 
                
            });
}
        
exports.crash = function(fn){
    //sha soporteit
    connection.query('call a()', (err, rows) => {
        if (err) fn (err);  
        fn(rows[0]); 
    });
}



exports.test = function(idOperacion,fn){
    connection.query('call operacion_dame('+idOperacion+')', function(err, rows){  
                // console.log("desde model errr ",err,"desde model rows ", rows);
                if (err) {
                    consulta = [{'codigo' : 0, 'mensaje' : "Error numero: "+err.errno+" descripcion: "+err.message}] 
                    fn (consulta);  
                }else fn(rows[0]); 
            });
}