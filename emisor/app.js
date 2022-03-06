var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello')
});

emtr.on ('greet', () => {
    console.log('A greeting occurred');
});

console.log('Hello');
emtr.emit('greet')

/*Creamos nuestra instancia del objeto emisor después de importarlo desde la dependencia de emitter.js.
Usando "emtr.on" añadimos 2 nuevas funciones distintas al emisor, aunque ambas con el mismo identificador "greet".
Y después, con "emtr.emit" llamamos a las funciones asociadas con "greet" dentro del emisor, 
que vienen a ser las 2 previamente añadidas. De tal menaera que con esta única instrucción recibimos 2 respuestas diferentes, una de cada función*/ 

emtr.on ('jump', () => {
    console.log('someone jumped')
});

console.log(emtr)
emtr.emit('jump')

/*De nuevo, añadimos una nueva función al emisor, pero esta vez con el nombre "jump".
 Hacemos un log del contenido del emisor y podemos comprobar que efectivamente se ha añadido la función de "jump"
 Hacemos la llamada a las funciones "jump" y como es de esperase, recibimos únicamente la respuesta de la que se añadió y nada más.*/