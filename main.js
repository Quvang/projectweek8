"use strict";

var server = require("./servers/server");               // make server module available
var router = require("./routers/router");            // router module

server.start(router);                               // start server
                                                    // callback to route
