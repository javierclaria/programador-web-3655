
/* var compararnNumerosMax = function () {
    
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



var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']
var myJSON = JSON.stringify(testList);


var GuardarDatos = function(miKey, MiArray) {

  var myJSON = JSON.stringify(testList);
  localStorage.setItem(miKey, myJSON)

}

GuardarDatos('Estudiantes');
*/

var nombres = ['Javier','Ana','Mauricio', 'Ariela']
var content = document.getElementById('contenedor')
var reyesMagos = ['Melchor','Gaspar','Baltazar']

   for (var i = 0; i < nombres.length ; i++) {

        var parrafoNombres = document.createElement('div');

        parrafoNombres.innerHTML = nombres[i];

        content.appendChild(parrafoNombres);
   }


var crearNombre = function (miNombre, miClase, num, miPref ) {
        
        var miNombreParrafo = document.createElement('div');

        miNombreParrafo.innerHTML = miNombre;
        miNombreParrafo.id = miNombre + '_' + miPref + num
        miNombreParrafo.className = miClase

        return miNombreParrafo

} 

   for (var j = 0; j < reyesMagos.length ; j++) {
    var nuevoElemento = crearNombre(reyesMagos[j], 'reyesMagos', j, 'nombres_reyes_magos'); 
     content.appendChild(nuevoElemento);
   }

var removerPorId = function( miIdRemover ){
    document.getElementById(miIdRemover).remove();
}


var student = [{
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}, 
{
  firstName: 'Nora',
  lastName: 'Rinaldi',
  dni: 12341234,
  email: 'nora@gmail.com'
},
{
  firstName: 'edu',
  lastName: 'Lolapa',
  dni: 22999333,
  email: 'lolapa@gmail.com'
}
];

var listGroup = document.getElementById('22999333')

var crearNombreAlumno = function ( newStudent ) {

        var nuevoAlumno = document.createElement('li');
        nuevoAlumno.id = newStudent.dni

        nuevoAlumno.innerHTML = '<h1>'  + newStudent.firstName  + '</h1>' +
        '<h3>'+ newStudent.dni + '</h3>'+
        '<p>E-mail: ' + newStudent.email + '</p>'+

        return nuevoAlumno

        } 

   for (var h = 0; h < student.length ; k++) {
    var nuevoStuandt = crearNombreAlumno(student[k]); 
     listGroup.appendChild(nuevoStuandt);
   }

