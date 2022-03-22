const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world, this is the root route')
});

app.listen(3000);
app.get('/uno', (req, res) => {
    res.send('Hello world, from route one')
})

app.get('/superSecretRoute',(req,res) => {
    res.send('Hello World, from the super secret route');
});

app.get('/prueba',(req,res) => {
    res.send('Hello World, from route Prueba');
});

