"use strict";
/*
 * check if routed handler function exists
 * if yes call it, else complain
 */
const handlers = require("./handlers");               // handlers module

const requestHandlers = {                             // application urls here
    "/home": handlers.home,
    "/info": handlers.info,
    "/contact": handlers.contact,
    "/about": handlers.about,
    "/hello": handlers.hello,
    "/notfound": handlers.notfound,
}

module.exports = {
    route(req, res, body) {

        if (typeof requestHandlers[req.url] === 'function') { // look for route
            requestHandlers[req.url](req, res);               // if found use it
        } else {
            requestHandlers["/notfound"](req, res);           // use notfound
        }
    }
}
