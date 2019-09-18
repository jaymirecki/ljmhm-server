$(document).ready(function() {
    loadStyle();
    jaysays();
});

var sayings = ["You're awesome!"];

updateSayings();

function loadStyle() {
    var stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.type = 'text/css';
    var mobile =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log(mobile);
    if (mobile)
        // console.log("Mobile");
        stylesheet.href = '/mobile.css';
    else
        stylesheet.href = '/desktop.css';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
}

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