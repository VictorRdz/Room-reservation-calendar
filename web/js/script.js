$(document).ready(function(){

    // When ready:
    $("#sidebar").animate({width: "330px"}, 1000);

    // On event:
    $("#topnav .sidebar").click(function(){
        $("#sidebar").animate({width: "toggle"}, 300);
    });

});