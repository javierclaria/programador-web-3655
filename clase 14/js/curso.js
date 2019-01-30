$( document ).ready(function() {
    $('.figure').click(function(event) {
        var idItem = $(event.target).attr('id')
        $(event.target).fadeOut(1000, function (event) {
            var idItem = $(this).attr('id')
            $('#' + idItem).parent().parent().remove();
        });
      });

});


