//var Emitter = require('./emitter');
var Emitter = require('events');

/* Usando el emisor de NODE JS el código sigue funcionando. Además, podemos observar las diferencias en la estructura del emisor cuando imprimos la variable "emtr" 
casi al final del código*/

const config = require('./config');

var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello')
});

emtr.on (config.events.GREET, () => {
    console.log('A greeting occurred');
});

/* Nuevamente el archivo se ejecuta correctamente con el cambio al incluir los "magic string". Con esto podemos agilizar el proceso 
de escritura de código y reducir la posibilidad de cometer "typos", ya que como tal no escribiremos tanto manualmente
si utilizamos el sistema de autocompletado de la notación de punto, o bine, sólo nos guiamos por las sugerencias del mismo */

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