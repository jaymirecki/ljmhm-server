var express = require('express');
var app = express();

function cors(response) {
    response.header("Access-Control-Allow-Origin", "*");
    return response;
}

app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response) {
    response = cors(response);
    response.sendfile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 8888);