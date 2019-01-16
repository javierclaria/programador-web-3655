$( document ).ready(function() {
    var contador = 0;
    var email = $('#campoMail').val();
    
    $( ".square" ).click(function(e) {
        var target = $( e.target );
        if(target.hasClass('circle') || target.hasClass('cross')) {
            console.log('nada');
        }

        else {

            if (contador%2) {
                target.addClass( 'circle');
                contador++
            
            }

            else {
                    target.addClass( 'cross');
                    contador++
            }

        }       

    });

    $('#reset_bt').click(function() {
        $('.square').removeClass('circle');
        $('.square').removeClass('cross');
    });

    $('#campoMail').blur( function(){
        console.log('hola');
        
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            $('#campoMail').addClass('is-valid')
        }else{
            $('#campoMail').addClass('is-invalid')
        }
    });

  });