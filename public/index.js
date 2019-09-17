$(document).ready(function() {
    jaysays();
});

function jaysays() {
    var request = new XMLHttpRequest();
    var getString = "/sayings";
    request.open("GET", getString, true);
    request.onreadystatechange = function() {
        if (request.readyState !=4)
            return;
        sayings = JSON.parse(request.responseText);
        var i = Math.floor(Math.random() * Math.floor(sayings.length));
        var say = sayings[i];
        $("#jaysays").html(say);
    };
    request.send();
}