const express = require('express'); //inyeccion de la dependencia
var app = express();
var PORT = process.env.PORT || 3000;//definicion del puerto de escucha
app.use('/assets',express.static(__dirname + '/public'))//contenido estatico
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/public/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo</h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`);
});

app.get('/persontest/:id', (req,res)=>{
    res.render('persontest',{ID: req.params.id, Qstr: req.query.qrst});
});

app.get('/person/:id', (req,res)=>{
    res.render('person',{ID: req.params.id, MSG: req.query.message, TIMES: req.query.times}); 
});

/* Solicitamos la id de person, el tipo de mensaje y las veces que se repetirá*/

app.listen(PORT);