"use strict";

var server = require("./servers/server");               //Gør server modulet tilgængeligt for resten
var router = require("./routers/router");            // Router modulet required, sådan så den altid tjekker om routing er gjort rigtigt

server.start(router);                               // start server
                                                    // callback to route
