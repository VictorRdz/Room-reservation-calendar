var year;
var month;
var week;

/*  Muestra el mes y el año en el encabezado.
    Ej.-> "Marzo 2018"  , "Junio 2020". */
function displayHeader(year, month) {
    var mes = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    $("#headerDate").text(mes[month] + " " + year);
}  

/*  Muestra los dias en el calendario.
    firstDayWeek:   0 = Domingo ... 6 = Sabado.
    lastDay:        28 ... 31 */
function displayContent(firstDayWeek, lastDay) {
    var day = 1;
    var j = firstDayWeek;
    $("#calendar .dayBox .hiddenRow").hide();
    for(var i = 0; i <= 5; i++) {
        for(j; j <= 6; j++) {
            var id = "#" + i + "-" + j;
            $(id).text(day);
            $(id).css({
                // modificar a las 2 semanas disponibles
                "backgroundColor" : "rgb(255, 255, 255)",
                "cursor" : "pointer"
            });
            day++;
            if(day > lastDay) break;
        }
        if(day > lastDay) break;
        j = 0;
    }

    if(i == 5) { // Muestra la 6° fila en el calendario.
        $("#calendar .dayBox .hiddenRow").show();
    }
}

// Actualiza el calendario.
function updateCalendar(year, month) {
    $("#calendar").animate( { "opacity" : .5 }, 80, function() {
        for(var i = 0; i <= 5; i++) {
            for(var j = 0; j <= 6; j++) {
                var id = "#" + i + "-" + j;
                $(id).text("").css({
                    "backgroundColor" : "rgb(236, 236, 236)",
                    "cursor" : "default"
                });
            }
            j = 0;
        }
        var date = new Date(year, month);
        var lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        firstDayWeek = date.getUTCDay("1");
        lastDay = lastDate.getDate();

        displayHeader(year, month);
        displayContent(firstDayWeek, lastDay);
        $("#calendar").animate( { "opacity" : 1 }, 200);
    });
}