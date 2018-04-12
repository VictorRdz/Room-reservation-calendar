var listDate;   // Fecha (AÑO, MES, DIA);
var listPage = 0;

$(document).ready(function() {

    updateListBtn();
        
    $("#listNext").click(function() {
        updateListBtn(1);
        listDate.setDate(listDate.getDate() + 7);
        updateList();
    });   

    $("#listPrev").click(function() {
        updateListBtn(-1);
        listDate.setDate(listDate.getDate() - 7);
        updateList();
    });   

})

function updateList() {
    $("#list").animate( { "opacity" : .5 }, 80, function() {
        var semana = ["Domingo", "Lunes", "Martes",
                "Miércoles", "Jueves", "Viernes", "Sábado"];
        var mes = ["ENERO", "FEBRERO", "MARZO", "ABRIL",
                "MAYO", "JUNIO", "JULIO", "AGOSTO",
                "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
        var month = listDate.getMonth();
        for(var i = 0; i < 7; i++) {
            $("#D" + i).text(semana[listDate.getUTCDay()]);
            $("#d" + i).text(listDate.getDate());
            listDate.setDate(listDate.getDate() + 1);
        }
        // Update list header
        listDate.setDate(listDate.getDate() - 1);
        if(month != listDate.getMonth()) {
            $("#dH").text(mes[month] + " - " + mes[listDate.getMonth()] + 
                " " + listDate.getFullYear());
        }
        else {
            $("#dH").text(mes[month] + " " + listDate.getFullYear());
        }
        listDate.setDate(listDate.getDate() - 6);
        $("#list").animate( { "opacity" : 1 }, 200);
    });
    
}

function updateListBtn(updateValue = 0) {
    listPage += updateValue;
    if(listPage == 0) {
        $("#listPrev").css("visibility", "hidden");
        if(maxSemanas > 1) {
            $("#listNext").css("visibility", "visible");
        }
    }
    else {
        if(listPage == maxSemanas - 1) {
            $("#listNext").css("visibility", "hidden");
            if(maxSemanas > 1) {
                $("#listPrev").css("visibility", "visible");
            }
        }
        else {
            $("#listPrev").css("visibility", "visible");
            $("#listNext").css("visibility", "visible");
        }
    }
}

