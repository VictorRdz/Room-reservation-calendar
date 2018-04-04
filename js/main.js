$(document).ready(function() {

    showContentClass("01");
    $("#content-01").load("../html/calendar.html", function() {
        // Obtener la fecha del servidor.
        $.ajax({
            url: "../php/date.php",
            type: "GET",
            success: function(data) {
                var fecha = JSON.parse(data);
                year = parseInt(fecha.var1);
                month = parseInt(fecha.var2) - 1;
                week = parseInt(fecha.var3);
                updateCalendar(year, month);
            }
        });
    });

    $("#content-02").load("../html/list.html"), function() {
        
    }

    $("#showList").click(function() {
        hideContentClass("01");
        showContentClass("02");
    });
    
    $("#showCalendar").click(function() {
        hideContentClass("02");
        showContentClass("01");
    });

});

function showContentClass(contentId) {
    $("#content-" + contentId).css("display", "flex");
}

function hideContentClass(contentId) {
    $("#content-" + contentId).css("display", "none");
}