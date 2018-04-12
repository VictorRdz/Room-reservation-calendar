var calDate; // Fecha (AÑO, MES);

$(document).ready(function() {

    $("#calNext").click(function() {
        calDate.setMonth(calDate.getMonth() + 1);
        updateCalendar();
    });

    $("#calPrev").click(function() {
        calDate.setMonth(calDate.getMonth() - 1);
        updateCalendar();
    });

});


/*  Muestra el mes y el año en el encabezado. */
function displayHeader() {
    var mes = ["Enero", "Febrero", "Marzo", "Abril",
            "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    $("#headerDate").text(mes[calDate.getMonth()] + " " + calDate.getFullYear());
}  

/*  Muestra los dias en el calendario. */
function displayContent() {
    var mes = ["Enero", "Febrero", "Marzo", "Abril",
            "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var j = calDate.getUTCDay("1"); // First day of the week
    var thisMonth = calDate.getMonth();
    $("#calendar .dayBox .hiddenRow").hide();
    for(var i = 0; i <= 5; i++) {
        for(j; j <= 6; j++) {
            var id = "#c" + i + "-" + j;
            $(id).text(calDate.getDate());
            $(id).removeClass("disponible");
            $(id).addClass("normal");
            // Si es un día valido para reservación... (Posibilidad de optimizar)
            diasDisponibles.forEach(function(item) {
                if(($("#headerDate").text().match("[A-Z][a-z]+") == mes[item.getMonth()]) && 
                                ($(id).text() == item.getDate())) {
                    $(id).addClass("disponible");
                }
            })
            calDate.setDate(calDate.getDate() + 1);
            if(calDate.getMonth() != thisMonth) break;
        }
        if(calDate.getMonth() != thisMonth) {
            calDate.setMonth(calDate.getMonth() - 1);
            break;
        }
        j = 0;
    }

    if(i == 5) { // Muestra la 6° fila en el calendario.
        $("#calendar .dayBox .hiddenRow").show();
    }
}

// Actualiza el calendario.
function updateCalendar() {
    // Clear calendar.
    $("#calendar").animate( { "opacity" : .5 }, 80, function() {
        for(var i = 0; i <= 5; i++) {
            for(var j = 0; j <= 6; j++) {
                var id = "#c" + i + "-" + j;
                $(id).removeClass("normal");
                $(id).text("").css("backgroundColor","rgb(236, 236, 236)");
            }
            j = 0;
        }
        displayHeader();
        displayContent();
        
        $("#calendar").animate( { "opacity" : 1 }, 200);
    });
}