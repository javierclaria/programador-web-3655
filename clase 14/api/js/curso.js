$( document ).ready(function() {

    var crearElemento = function(personaje){
        $( ".listPersonajes" ).append( "<tr><td>" 
        + personaje.name + "</td><td>" 
        + personaje.hair_color + "</td><td>"  
        + personaje.skin_color +
        "</td></tr>" 
        );
    }

    $.ajax('https://swapi.co/api/people')
    .done( function (data) {
        var people = data.results
            for (i = 0; i < people.length; i++) {
                crearElemento(people[i])
            }
    })

    .fail( function (data) {
        console.log('error')
    })

});
