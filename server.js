var express = require('express');
var app = express();

function cors(response) {
    response.header("Access-Control-Allow-Origin", "*");
    return response;
}

app.get("/", function(request, response) {
    response = cors(response);
    response.sendfile("/public/index.html");
});

app.listen(process.env.PORT || 8888);