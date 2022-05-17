const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://usuario:contraseña321@cluster0.jlyzd.mongodb.net/?retryWrites=true&w=majority')
.then(db => console.log('Concetado a la base de datos'))
.catch(err => console.error(err));

