"use strict";

var server = require("./js/server");               // make server module available
var router = require("./js/router");            // router module

server.start(router);                               // start server
                                                    // callback to route
