'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
 const filesystem = require("fs");
module.exports = {
    home(req, res) {
      filesystem.readFile("views/index.html", function(err, data) {
        if (err) {
            res.end("<h1>The page you wanted doesn't exist</h1>");
        }
        res.write(data);
        res.end();
      });
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
