var express = require('express');
var app = express();

function cors(response) {
    response.header("Access-Control-Allow-Origin", "*");
    return response;
}

app.use(express.static(__dirname + '/public'));

app.get("/sayings", function(request, response) {
    response = cors(response);
    response.send(sayings);
})

app.get("/", function(request, response) {
    response = cors(response);
    response.sendfile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 8888);

var sayings = [
    "You're awesome!",
    "You're gorgeous!",
    "How awesome was your day?",
    "Dope swaggity!",
    "You're dressed for something!",
    "Dress the way you want to feel!",
    "You're a star!",
    "There's no one like you!",
    "Gosh diddily dang doodle!",
    "Shagadelic, baby!"
];