"use strict";

const http = require("http");
const httpStatus = require("http-status-codes");
const hostname = "127.0.0.1";
const port = 3000;
const app = http.createServer();            // server as an obj

app.on("request", function (req, res) {     // eventhandler for "request"
    console.log("Log: Received an incoming request!");
                                            // prep response header
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html; charset=utf-8"
    });
                                            // prep response body
    let responseMsg = "<h1>Project week 8</h1>";
    responseMsg += "<p><kbd>Main.js</kbd> at your disposal</p>";
    res.write(responseMsg);                 // respond
    res.end();                              // sends response http
    console.log(`Log: Responded: ${responseMsg}`)
});

app.listen(port, hostname, function () {
    console.log(`Server running, and listening at http://${hostname}:${port}/`);
});
