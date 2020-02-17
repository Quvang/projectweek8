'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const filesystem = require("fs");                   // file system access
module.exports = {
    home(req, res) {
        filesystem.readFile("./pages/index.html", function(err, data) {
            if (err) {
                res.end("<h1>The page you wanted doesn't exist</h1>");
            }
            res.write(data);
            res.end();
        });
    },
    notfound(req, res) {
        console.log(`Log: No handler found for route ${req.url}.`);
        res.end();
    }
}
