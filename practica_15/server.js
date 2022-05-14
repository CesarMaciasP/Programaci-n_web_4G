const express = require('express'); 
var app = express();
var PORT = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
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

app.post('/student',(req,res)=>{
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
});

app.post('/personjson', express.json({type: '*/*'}), (req, res) => {
    console.log('El objeto contiene:', (req.body))
    console.log('Nombre:', (req.body.firstname))
    console.log('Apellido:', (req.body.lastname))
})

app.get('/student',(req,res)=>{
    res.render('index')
});

app.listen(PORT);