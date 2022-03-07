let greeting = "Hello from greet 5";
let greet = () => {
    console.log(greeting);
}
module.exports = {
    greet:greet
}

/* De la manera en que se plantea aqui, exportamos a modo de propiedad del módulo únicamente las funciones o variables que deseemos.
Incluso podemos nombrar la propiedad de un modo distinto al de su contenido en cuestión. Haciendo que no se tenga que saber 
necesariamete la información interna real del módulo */