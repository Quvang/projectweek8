'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the routing mechanism
 */
const filesystem = require("fs");                           // file system access
const httpStatus = require("http-status-codes");

const goError = function(res) {
    res.writeHead(httpStatus.NOT_FOUND, {   // http page not found, 404
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("<h1>404 Not Found</h1>");
    res.end();
};

exports.getAndRespond = function(path, contentType, res) {
    console.log(path);
    if (filesystem.existsSync(path)) {              // does file exist, sync
        filesystem.readFile(path, function(err, data) { // read
            if (err) {                      // if read error
                console.log("nml: " + err);           // inform server
                goError(res);               // inform user
                return;                     // back to caller
            }
            res.writeHead(httpStatus.OK, contentType); // prep header
            res.write(data);                // prep body with read data
            res.end();                      // send response
        });
    } else {
        goError(res);                       // doesnt exist error
    }
};
