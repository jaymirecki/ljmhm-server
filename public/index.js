$(document).ready(function() {
    jaysays();
});

var sayings = ["You're awesome!"];

updateSayings();

function updateSayings() {
    var request = new XMLHttpRequest();
    var getString = "/sayings";
    request.open("GET", getString, true);
    request.onreadystatechange = function() {
        if (request.readyState !=4)
            return;
        sayings = JSON.parse(request.responseText);
    };
    request.send();
}

function jaysays() {
    var i = Math.floor(Math.random() * Math.floor(sayings.length));
    var say = sayings[i];
    if (say == $("#jaysays").html())
        jaysays()
    else
        $("#jaysays").html(say);
}