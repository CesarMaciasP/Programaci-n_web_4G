var express = require('express');
var app = express(); //Declaramos app de express

var port = process.env.PORT || 3000; //Abrimos un puerto para el servidor

app.use('/assets',express.static(__dirname + '/public'))

//Primera ruta. Al nivel de la raíz
app.get('/', function (req, res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!<h1></body></html>`);
});

//Segunda ruta. Regresa un objeto JSON
app.get('/api', function(req, res){
    res.json({firstname: 'John', lastname:'Doe'});
});

//Tercera ruta. Recibe un parametro
app.get('/person/:id', function (req, res) {
    res.send('<hmtl><head></head><body><h1>Person: ' + req.params.id + ' </h1></body></html>')
});

app.listen(port); //Iniciar el sever y ponerlo a escuchar