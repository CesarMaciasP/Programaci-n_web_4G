let greet = require('./greet1')
let greet2 = require('./greet2').greet
let greet2a = require('./greet2')

greet();
/* Desde el moduulo de greet1.js exportamos la función greet. Con esto podemos 
ejecutarla aun si no esta declarada dentro de este archivo como tal */
greet2();
/* Ahora exportamos una propiedad de greet2 que contiene una función. Para llamarla primero
 necesitamos especificar que deseamos la propiedad .greet del módulo tras instanciarlo y después la ejecutamos usando los párentesis */
greet2a.greet();
/* O bien, podemos invocarla de este modo. Trayendo todo el modulo y especificando el la llamada la propiedad 
que queremos recibir. Ambas maneras son funcionales pero la primera es la más común*/

const greet3 = require('./greet3');
console.log(greet3);
greet3.greet();

/* En greet3.js traemos un objeto previamente construido. De este objeto podemos llamar a sus propiedades segun deseemos. */
/* Aqui, primero hacemos un log con el que podemos comprobar que greet3 es en efecto un objeto con ambas propiedades
especificadas en el módulo greet3.js (.greeting y .greet). Despues invocamos la propiedad greet y recibimos el respectivo saludo del objeto*/

greet3.greeting = "Hello from the App"
let greet3b = require('./greet3');
greet3b.greet();
greet3.greet() 

/* Al traer al objeto previamente construido con require, cuando hacemos cambios en este, los cambios se ven reflejados
 directamente en su dirección de la memoria, pues lo que hacemos no es traer el objeto como tal, sino referenciarlo*/
 /*Cambiamos el saludo (.greeting) y al invocar la función que saluda, recibimos la respuesta cambiada*/

const Greet4 = require('./greet4') 
let myGreet = new (Greet4);
myGreet.greet();

/* Esta vez lo que traemos desde el módulo greet4.js es la clase constructora y no el objeto ya creado, en su lugar, lo instanciamos aqui mismo usando "new". */

const greet5 = require('./greet5')
greet5.greet();

/* El módulo de greet5 sólo nos da acceso a greet debido a que esta estructurado comop un revealing module pattern */

