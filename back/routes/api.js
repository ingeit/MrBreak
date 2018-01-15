var express = require('express');
var router = express.Router();

var VentaController = require('./../controllers/ventaController');

router.post('/ventaNuevaMRBREAK', OperacionController.ventaNuevaMRBREAK);


module.exports = router; 
 
    
    // authRoutes.post('/register', AuthenticationController.register);
    // authRoutes.post('/login', AuthenticationController.login);
 
    // authRoutes.get('/protected', requireAuth, function(req, res){
    //     res.send({ content: 'Success'});
    // });
    // //API usuarios
    // apiUsuarios.get('/usuariosListar',UsuariosController.listarUsuarios);
    // apiUsuarios.get('/usuarioDame/:id',UsuariosController.dameUsuario);
    // apiUsuarios.post('/usuarioModificar',UsuariosController.usuarioModificar);
    // apiUsuarios.get('/usuarioBaja/:id',UsuariosController.usuarioBaja);
    // apiUsuarios.post('/forgot',UsuariosController.forgotPassword);
    // //API Registros
    // apiRegistros.get('/registrosListar',RegistrosController.registrosListar);
    // apiRegistros.get('/listarMarkers',RegistrosController.registrosListarMarkers);
    // apiRegistros.get('/registroDame/:id',RegistrosController.registroDame);
    // apiRegistros.get('/registroValidar/:id',RegistrosController.registroValidar);
    // apiRegistros.get('/registroInvalidar/:id',RegistrosController.registroInvalidar);

    
    // app.get('/', function(req, res) {
    //     res.render('index', { title: 'Express' });
    // });
    // app.get('/forgot', function(req, res) {
    //     res.render('forgot', {
    //         user: req.user
    //     });
    // });
