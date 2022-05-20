const mongoose = require('mongoose');
const express = require('express');
const personsRoutes = require('./routes/persons');

mongoose.Promise = global.Promise;
const app = express();
app.search('view engine', 'ejs');
app.use(express.urlencoded( { extended: false } ));
app.use(personsRoutes);

mongoose.connect(
    'mongodb+srv://usuario:contraseña321@cluster0.jlyzd.mongodb.net/?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }    
);

const db = mongoose.connection;
db.on("erros", console.error.bind(console, "Error de conexión"));
db.once("open", function () {
    console.log("Conectado al servidor");
});

app.listen(3000)