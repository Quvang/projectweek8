'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
module.exports = {
    home(req, res) {
        res.end("<h1>Front Page</h1>");
    },
    info(req, res) {
        res.end("<h1>Info Page</h1>");
    },
    contact(req, res) {
        res.end("<h1>Contact Us at:</h1>");
    },
    about(req, res) {
        res.end("<h1>Learn About Us</h1>");
    },
    hello(req, res) {
        res.end("<h1>Send Us an Email</h1>");
    },
    notfound(req, res) {
        console.log(`Log: No handler found for route ${req.url}.`);
        res.end();
    }
}
