"use strict";

const http = require("http");
const httpStatus = require("http-status-codes");
const hostname = "127.0.0.1";
const port = 3000;
const app = http.createServer(function (req, res) { // server obj with call back
    console.log(`Received an incoming request from: ${req.url}`);
    console.log(`with HTTP-method: ${req.method}`);
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html; charset=utf-8"
    });
    let responseMsg = "<h1>Hello Universe!</h1>";   // response text
    responseMsg += "<p><kbd>myg4</kbd> at your disposal</p>";
    res.write(responseMsg);                         // response body with text
    res.end();                                      // send http package
    console.log(`My response was: ${responseMsg}`)
});

app.listen(port, hostname, function () {
    console.log(`Server running, and listening at http://${hostname}:${port}/`);
});
