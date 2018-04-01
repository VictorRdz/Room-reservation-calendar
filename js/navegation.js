$(document).ready(function() {

    $("#prevIcon").click(function() {
        if(month == 0) {
            month = 11;
            year--;
        }
        else {
            month--;
        }
        updateCalendar(year, month);
    });

    $("#nextIcon").click(function() {
        if(month == 11) {
            month = 0;
            year++;
        }
        else {
            month++;
        }
        updateCalendar(year, month);
    });

});