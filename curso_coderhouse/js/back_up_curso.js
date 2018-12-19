/* var car = function (model, bran, year) {
  this.model = model;
  this.bran = bran;
  this.year = year;

  this.getCarName = function (){
      console.log(this.model, this.bran, this.year)
  };

};

var auto1 = new car ('Sura', 'VW', '2018')
var auto2 = new car ('Gol', 'VW', '2013')
var auto3 = new car ('208', 'peugeot', '2017')

auto1.getCarName()
auto2.getCarName()
auto3.getCarName()


var student = function( firstName, lastname, dni, email, id) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.dni = dni;
  var id = Math.random()

  this.getFullName = function(){
      if ( this.firstName != '' && this.lastname != '') {
        console.log(this.firstName, this.lastname);
      };

      if ( this.firstName != '' && this.lastname == '') {
        console.log(this.firstName);
      };

      if ( this.firstName == '' && this.lastname != '') {
        console.log(this.lastname);
      };

  };

  this.getID = function(){
    console.log(id)
  };

};

var student1 = new student('', 'Claria', '31344023', 'javier.claria@gmail.com')
var student2 = new student ('Ana', 'Fernandez', '21312312', 'ana@gmail.com')
var student3 = new student ('horacio','', '1012212', 'horlarreta@gmail.com')

student1.getFullName();
student2.getFullName();
student3.getFullName();
student1.getID();
student2.getID();
student3.getID();
*/ 

var empleado = function(nombre, horas) {
  this.nombre = nombre
  var horas = 0

    this.horasTrabajadas = function(){
        horas++
    };

    this.getHorasTrabajas = function (){
      console.log(horas);
      return horas
    }

};

var empleado1 = new empleado('Javier');

empleado1.horasTrabajadas();
empleado1.horasTrabajadas();
empleado1.horasTrabajadas();

empleado1.getHorasTrabajas();







