// control de flujo 

/*
var numCliente = prompt('Dame un numero')
var resCliente = numCliente % 2

if (resCliente == 0 ){
	alert('es par!');
}
else{
	alert('no es par!')
}


var nomCliente = prompt('Dime cual cual es tu nombre ... ');
var genCliente = prompt('Cual es tu genero ... ');

if (genCliente == "male" ){
	alert('Hola Sr ' + nomCliente );
}
else if (genCliente == "female") {
		alert('Hola Sra. ' + nomCliente );
}
else {
	alert('x ' + nomCliente);	
}


var ladoTrianguloA = prompt('Tamano del primer lado');
var ladoTrianguloB = prompt('Tamano del segundo lado');
var ladoTrianguloC = prompt('Tamano del tercer lado');

var sumaTriangulo = parseInt(ladoTrianguloA) + parseInt(ladoTrianguloB) + parseInt(ladoTrianguloC)

if (sumaTriangulo)  {
	alert('El tamano es de ' + sumaTriangulo )
}

else {
	alert('Solo introducir numeros');
}


var nomCliente = prompt('Dime cual cual es tu nombre ... ');
var genCliente = prompt('Cual es tu genero ... ');

switch (genCliente) {
  case 'Male':
    alert('Hola Sr. ' + nomCliente)
    break
  case 'Female':
    alert('Hola Sra. ' + nomCliente)
    break
  default:
    alert('X ' + nomCliente )
    break
}

var diaSemana = prompt('Dia de la semana ');

switch (diaSemana) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    alert('Dia de semana')
    break
  case 'Sábado':
  case 'Domingo':
    alert('Es un dia del fin de semana')
    break
  default:
    alert('No es un dia :S ')
    break
}



var nomCliente = prompt('Dime cual cual es tu nombre ... ');
var numCliente = prompt('Tu numero del dia ... ');

if ( numCliente > 20 ){
	alert('Buen dia ' + nomCliente );
}
else if ( numCliente >= 5 ) {
		alert('Pesimo Dia ' + nomCliente );
}
else if ( numCliente <= 4 ) {
		alert('Hasta manana ' + nomCliente );
}
else {
	alert('No es un numero ' + nomCliente);	
}


var i = 1 

while ( i < 10){
  console.log(i);
  i++
}

var unArray = [ "a" , "b" , "c" , "d"]

for ( i = 0; i < unArray.length; i++  ) {
  console.log(unArray[i]);
};


var p = 1 
do {

console.log(p);
p++

}

while( p < 10 );
 
do {
var passCliente = prompt('Ingrese una contrasena');
}

while ( !passCliente );

// ejervicio 1b

for ( var i = 1; i < 251; i++  ){
console.log(i)

//ejercico 1c
for ( var i = 10; i <= 1000; i++ ){

if ( i % 3 === 0 ) {
console.log(i)

}

}
};

// Ejercio 2 

var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    for (var i = 0; i< diasSemana.length; i++){
      console.log(diasSemana[i])
  }


// Ejercicio 3 

  var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
   
    for (var i = 0; i< diasSemana.length; i++){

      switch (diasSemana[i]) {
      case 'Lunes':
      case 'Martes':
      case 'Miercoles':
      case 'Jueves':
      case 'Viernes':
              console.log(diasSemana[i])
      break
      default:
            console.log('son dias de fin de semana');
            break
      }

  }


// ejercicio mio 
  var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
   
    for (var i = 0; i < di

    asSemana.length; i++){
      alert(diasSemana[i]);
  }

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]
   
    for (var i = 0; i< daysOfTheWeek.length; i++){

      switch (daysOfTheWeek[i]) {
      case 'Lunes':
      case 'Martes':
      case 'Miércoles':
      case 'Miercoles':
      case 'Jueves':
      case 'Viernes':
              console.log('dia habil');
      break

      case 'Sabado':
      case 'Sábado':
      case'Domingo': 
        console.log('No trabajamos fin de semana');
      break
      
      default:
            console.log('son dias de fin de semana');
            break
      }

  }

var frase = "anita lava la tina"

for ( var i = 0 ; i < frase.length; i++ ){
 console.log(frase[i]);
};


var asterisco = " " ; 

for (var i = 1; i <= 5; i++ ){

  for ( var b = 1; b <= i; b++ ) {
    asterisco = asterisco + "*"; 
  }
  
  console.log(asterisco);
  asterisco = " ";

};



var MayusFuncion = function (parametro) {  

        return parametro.toUpperCase();  
  }

}


console.log( MayusFuncion('lalala') );


var PromedioNota = function(){
    var notas = [ 5,6,7,8,9 ];
    var sumaN = 0;

    for ( var i = 0 ; i < notas.length; i++ ) {
      var sumaNotas = notas[i]
      var sumaN = sumaN + sumaNotas;

    }

    return sumaN / notas.length ;
 

}

PromedioNota()



var palabraGrande = function () {
    
  var palabra = 'esta es una palabra grande'.split(' ');
  var palabracomparada = ' ';
  
  for (var i = 0; i < palabra.length; i++) {
      var palabracomparada = palabra[i]
      if (palabracomparada.length < palabra.length ) {
        palabra[i] = palabracomparada;
      }

      return palabracomparada;
  }
  
}

palabraGrande(palabracomparada)



var resultadoNum = ''

var buscarEstudiante = function(){

    var listaEstudiantes = [ "pedro", "horacio","daniel", "gustavo"]

    var alumnoNombre = prompt('Busca al estudiante')

    for (var i = -1; i < alumnoNombre.length; i++) {
        if (alumnoNombre === listaEstudiantes[i] ){

              var resultadoNum = listaEstudiantes[i]
              return resultadoNum
              break;
        }

        else {
          console.log('no existe');
        }

    }

}

*/


buscarEstudiante(resultadoNum);
console.log(resultadoNum);



var jarra = function () {
    this.medidor = function (ingrediente){
          console.log(ingrediente.nm, ingrediente.ct);
    }
}

var ingrediente = function(nm, ct) {
    this.nombre = nm;
    this.cantidad = ct;    
}

var miJarra = new jarra(ingrediente);
var manzana = new ingrediente('Manzana','100 gramos');




