let obj = {
    nombre: 'Pepe',
    edad: '20',
    apeliido: 'Pérez',
    keypress: function () {
        console.log('Se ha presionado una tecla')

    },
    mouseOver: function () {
        console.log('El puntero del mouse está arriba')
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

/*Creamos un objeto y demostramos que podemos llamar sus propiedades de 2 formas distintas.
 Con el nombre de la propiedad despues de un "." o con uso de un string con el nombre de la propiedad*/

let myKey = 'nombre'
console.log(obj[myKey]);

/*Podemos asignar a una variable el valor de un string con el nombre de alguna propiedad. 
Aqui "myKey" es "nombre" por lo que al llamar la propiedad de nuesto objeto con el valor de "myKey", llamamos la propiedad "nombre"*/

myKey = 'keypress'
console.log(obj[myKey]());
myKey = 'mouseOver'
console.log(obj[myKey]());

/*Esta vez asignamos a nuestra key el valor de las propiedades que contienen una función y las invocamos añadiendo "()" a la llamada.*/ 

let myArray = [];

myArray.push(4);
myArray.push('textoooooo');
myArray.push(obj);
myArray.push(function (){
    console.log('Hola desde el array')
});

console.log(myArray);
console.log(myArray[2].mouseOver());
console.log(myArray[3]());

/*Haciendo un log del array recibimos todos los datos que este contiene. Sin embargo, en el casod e la función sólo nos indica que es una función, más no la ejecuta.
En el segundo log invocamos la propiedad MouseOver (Úsando los paréntesis despues de nombrarla) de nuestro objeto en la posición 2.
En el tercer log invocamos la función de la tercera posición desde el array*/

let funcArray = [];

funcArray.push (() => {
     console.log('Función 1')
 });

 funcArray.push (() => {
    console.log('Función 2')
});

funcArray.push (() => {
    console.log('Función 3')
});

funcArray.forEach((item) => {
    item()
})

/*En un nuevo array, insertamos una serie de funciones que imprimen un mensaje. Con el uso de forEach() invocamos todos los elementos del array que al ser funciones, son ejecutadas. */
