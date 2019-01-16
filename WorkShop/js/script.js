var KEY = 'students';
var student = {};
var firstName = document.getElementById('firstName');
var dni = document.getElementById('dni');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var deleteDni = document.getElementById('deleteDni')
var addStudent = document.getElementById('addStudentButton');
var deleteStudent = document.getElementById('deleteStudentButton');
var searchName = document.getElementById('searchText');
var searchBtn = document.getElementById('searchStudentButton');
var studentListNodes = document.getElementById('mainList');
var studentlistSearch = document.getElementById('searchList');

addStudent.disabled = true;

var getLocalStorage = function (key) {
  return JSON.parse(localStorage.getItem(key)) || []
};

var drawList = function (students, removePrev ) {
  if (removePrev) {
    var studentNode 
    studentNode.innerText = '';
    console.log(probando)
  }

  for (var i = 0; i < students.length; i++) {
    var studentNode = document.createElement('li');
    studentNode.innerText = students[i].name + '  ' + students[i].lastName + ' - ' + students[i].dni + students[i].email;
    studentListNodes.appendChild(studentNode)
  }
};

var validateAddStudent = function () {
  if (student.name && student.email && student.dni) {
    addStudent.disabled = false;
  }
};

var isValid = {
  name: function (e) {
    return e.value
  },

  dni:function (e) {
    
    var ResultDni = 0
    var students = getLocalStorage(KEY) 

    for (var h = 0; h < students.length; h++) {
        if (e.value === students[h].dni) {
          return false
        } 
    }

    return e.value && parseInt(e.value) > 0
  },

  lastName:function (e) {
    return true
  },
  email: function (e) {
    var email = e.value;
    var parsedEmail = email.split('@');

    return parsedEmail.length === 2 && parsedEmail[1].indexOf('.') !== -1
  }
};

var validateElement = function (event) {
  var element = event.target;
  var field = event.target.name;

  if (!isValid[field](element)) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid')
  } else {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid')
  }
  student[field]= element.value;

  validateAddStudent()
};

firstName.onblur = validateElement;
dni.onblur = validateElement;
lastName.onblur = validateElement;
email.onblur = validateElement;

var saveStudent = function () {
  var studentList = getLocalStorage(KEY);
  var newList = studentList.concat(student);

  localStorage.setItem(KEY, JSON.stringify(newList));
  drawList([student])
};
 
var removeStudent = function () {

  var students = getLocalStorage(KEY)
  var newListStudent = []; 

  for (var h = 0; h < students.length; h++) {
    
      if ( deleteDni.value != students[h].dni) {
        newListStudent.push(students[h])
      } 

      else {
        console.log('noencuentra')
      }

      localStorage.setItem(KEY, JSON.stringify(newListStudent))
      drawList([student], true )
  }
};


var searchStudent = function () {

  var students = getLocalStorage(KEY) 

  for (var h = 0; h < students.length; h++) {
      if ( searchName.value == students[h].name) {
        var searchstudentNode = document.createElement('li');
        searchstudentNode.innerText = students[h].name + '  ' + students[h].lastName + ' - ' + students[h].dni + students[h].email;
        studentlistSearch.appendChild(searchstudentNode)


        console.log('test') 
        return false
      } 
  }

};


searchBtn.onclick = searchStudent;
deleteStudent.onclick = removeStudent;
addStudent.onclick = saveStudent;

drawList(getLocalStorage(KEY));