$( document ).ready(function() {
    var numero = 0; 

    $(document).keydown(function( event ) {
        
       if (event.which == 38){
            numero++; 
            $('.contenedor-numero').text(numero);
       } 
       if (event.which == 40){
        numero--; 
        $('.contenedor-numero').text(numero);

        } 
        if (event.which == 13 ){
            numero = 0;
            $('.contenedor-numero').text(numero);
        }
    });

    var arg = {
        duration:10000,
        easing: 'easeInOutElastic',
    }
    
    $('.figure').click(function(event) {
        $(event.target).fadeOut(1000);
      });

      $('#mostrar').click(function(){
          console.log('test');
          $('.figure img').fadeIn(arg)

      })

      var nform = $(".nombreForm" );
      $('.labelName').hide();

      $( ".nombreForm" ).change(function() {
        if(nform.val()){
            nform.addClass('is-valid');
            $('.labelName').hide();
        }

        else {
            $('.labelName').show();
            nform.removeClass('is-valid');
            nform.addClass('is-invalid')
        }

       });

       $(".emailForm").change(function (){
           var eform = $(".emailForm").val();
           var eformSplit = eform.split("@");

           if (eformSplit[1] && eformSplit[1].indexOf(".")!== -1 ){
                nform.addClass('is-valid');
           } else {
               nform.removeClass('is-valid');
               nform.addClass('is-invalid')
           }
       })



});


