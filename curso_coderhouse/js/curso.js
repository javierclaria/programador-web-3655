
var compararnNumerosMax = function () {
    
  var numeros = [1,10,8,5,4,25,3];
  var numeroMax = 0; 
  
  for (var i = 0 ; i < numeros.length; i++) {

      if (numeroMax < numeros[i] ) {
        numeroMax = numeros[i];
      }
  }
console.log(numeroMax);

}

compararnNumerosMax();

var compararnNumerosMin = function () {
    
  var numeros = [2,10,8,5,1,4,25,3];
  var numeroMin = numeros[0]; 
  
  for (var i = -1 ; i < numeros.length; i++) {

      if (numeroMin > numeros[i] ) {
        numeroMin = numeros[i];
      }
  }
console.log(numeroMin);

}

compararnNumerosMin();


var recorrerArray = function () {
    
  var numeros = [1,10,8,5,4,25,3];
  var numerosrevez = new Array();

  for (var i = numeros.length-1; i > -1; i--) {
     numerosrevez.push(numeros[i]);
  }

  console.log(numerosrevez);
}

recorrerArray();


var recorrerArrayEliminar8 = function () {
    
  var numeros = [1,10,8,5,4,25,3];
  var numerosrevez = new Array();

  for (var i = numeros.length-1; i > -1; i--) {

    if (numeros[i] == 8 ) {

    }
    
    else {
           numerosrevez.push(numeros[i]);
    }

  }

  console.log(numerosrevez);
}

recorrerArrayEliminar8();


function compararTextos(texto1,texto2) {
  var newtexto1 = texto1.toUpperCase()
  var newtexto2 = texto2.toUpperCase()

  var indexOfFirst = texto1.indexOf(texto2) 

  

/*  if (indexOfFirst != -1 ){
    resTextos = 'True';
  }

  else {
    resTextos = 'False';
  }
  */

  return resTextos

}

var textomayuscula = compararTextos('probando','probando otra vez');

console.log(textomayuscula);


