var maxSemanas = 2;
var diasDisponibles = new Array(maxSemanas * 7);



$(document).ready(function() {
    // Loading animation.
    $(document).on({
        ajaxStart: function() {$(".loading").fadeIn(100);},
        ajaxStop: function() {$(".loading").fadeOut(200);}
    });

    // Función principal---------------------------------
    $.ajax({
        url: "../php/date.php",
        type: "GET",
        success: function(data) {
            // Obtener fecha del servidor.
            var fecha = JSON.parse(data);
            var year = parseInt(fecha.var1);
            var month = parseInt(fecha.var2) - 1;
            var day = parseInt(fecha.var3);
            // Crear fechas para el contenido.
            calDate = new Date(year, month);
            listDate = new Date(year, month, day);
            // Llenar array de dias disponibles.
            for(var i = 0; i < maxSemanas * 7; i++) {
                diasDisponibles[i] = new Date(year, month, day + i);
            }
            // Cargar el contenido.
            $("#content-01").load("../html/list.html", function() {
                updateList();
            });
            $("#content-02").load("../html/calendar.html", function() {
                updateCalendar();
            });
            // Mostrar contenido.
            showContentClass("01");
        }
    });
    // ---------------------------------------------------
    // SIDEBAR--------------------------------------------

    $("#showList").click(function() {
        hideContentClass("02");
        showContentClass("01");
    });
    
    $("#showCalendar").click(function() {
        hideContentClass("01");
        showContentClass("02");
    });




    $("#verFecha").click(function() {
        alert(new Date(year, month, day));
    });

});

function showContentClass(contentId) {
    $("#content-" + contentId).css("display", "flex");
}

function hideContentClass(contentId) {
    $("#content-" + contentId).css("display", "none");
}

