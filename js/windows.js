$(document).ready(function() {

    $("td").click(function() {
        $("#overlay").load("../html/solicitar-reservacion.html", function() {
            $("#overlay").fadeIn(200);
        });
    });


});