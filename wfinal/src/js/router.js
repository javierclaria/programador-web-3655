import crossroads from 'crossroads'
import homeController from './controllers/homeController'

import guardadosController from './controllers/guardadosController'
import personajeController from './controllers/personajeController'
import contactoController from './controllers/contactoController'

crossroads.addRoute('/', function () {
        $('#root').load('./partials/home.html', homeController)
  })

crossroads.addRoute('#/contacto', function () {
    $('#root').load('./partials/contacto.html', contactoController)
})

crossroads.addRoute('#/personaje', function () {
    $('#root').load('./partials/personaje.html', personajeController)
})

crossroads.addRoute('#/guardados', function () {
    $('#root').load('./partials/guardados.html', guardadosController)
})
  
  crossroads.addRoute('#/contact', function () {
    console.log('contact')
  })
  

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })
  
  crossroads.parse(window.location.hash)