var nombre = prompt('Tu Nombre');
var numero = prompt ('Elige tu numerode la suerta');
var numeroNo = prompt ('Elige tu numerode la mala suerta');


console.log('Hola ' + nombre);
console.log(numero);


var sumaNumero = parseInt(numero) + 15;
var restaNumero = parseInt(numeroNo) - 15;

console.log(sumaNumero);
console.log(restaNumero);

var sumaVariables = sumaNumero + restaNumero