'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the routing mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");
const lib = require("../private/libWebUtil");           // home grown utilities
const experimental = require("../private/myTemplater"); // highly experimental template
const experimental1 = require("../private/myCountry"); // highly experimental template
const experimental2 = require("../private/myCities"); // highly experimental template
const experimental3 = require("../private/myLanguage"); // highly experimental template

const goError = function(res) {
    res.writeHead(httpStatus.NOT_FOUND, {   // http page not found, 404
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("<h1>404 Not Found</h1>");
    res.end();
};

module.exports = {
    getAndRespond(path, contentType, res) {
        if (fs.existsSync(path)) {              // does file exist, sync
            fs.readFile(path, function(err, data) { // read
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
    },

    receiveData(req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(experimental.receipt(obj));           // home made templating for native node
    },

    findCountry(req, res) {
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            /* Retrieve,
             * reads cities from the database
             */
            db.collection("country").find().toArray(function (err, land) {
                if (err) {
                    throw err;
                }
                res.writeHead(httpStatus.OK, {
                   "Content-Type": "text/html; charset=utf-8" } ); /* yes, write relevant header */
                res.write(experimental1.country(land));           // home made templating for native node
                con.close();
                res.end();
            });
        });
    },

    findCities(req, res) {
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            /* Retrieve,
             * reads cities from the database
             */
            db.collection("by").find().toArray(function (err, city) {
                if (err) {
                    throw err;
                }
                res.writeHead(httpStatus.OK, {
                   "Content-Type": "text/html; charset=utf-8" } ); /* yes, write relevant header */
                res.write(experimental2.cities(city));           // home made templating for native node
                con.close();
                res.end();
            });
        });
    },

    findLanguage(req, res) {
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            /* Retrieve,
             * reads cities from the database
             */
            db.collection("sprog").find().toArray(function (err, sprog) {
                if (err) {
                    throw err;
                }
                res.writeHead(httpStatus.OK, {
                   "Content-Type": "text/html; charset=utf-8" } ); /* yes, write relevant header */
                res.write(experimental3.language(sprog));           // home made templating for native node
                con.close();
                res.end();
            });
        });
    },
    findLanguage(req, res) {
        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname);                  // make dbname the current db
            /* Retrieve,
             * reads cities from the database
             */
            db.collection("sprog").find().toArray(function (err, sprog) {
                if (err) {
                    throw err;
                }
                res.writeHead(httpStatus.OK, {
                   "Content-Type": "text/html; charset=utf-8" } ); /* yes, write relevant header */
                res.write(experimental3.language(sprog));           // home made templating for native node
                con.close();
                res.end();
            });
        });
    },

insertCountry () {
  const mongo = require('mongodb');
  const dbname = "world";
  const constr = `mongodb://localhost:27017`;

  mongo.connect(
      constr, { useNewUrlParser: true, useUnifiedTopology: true},
                                                  function (error, con) {
      if (error) {
          throw error;
      }
      console.log(`Connected to server`);
      const db = con.db(dbname);                  // make dbname the current db
      /* Create,
       * inserts cities into the database
       */
      let obj = { name: "Aarhus", countrycode: "DNK", district: "Østjylland", population: 284846 };

      db.collection("by").insertOne(obj, function (err, collection) {
          if (err) {
              throw err;
          }
          console.log("Ny by Indsat");
          con.close();
      });
  });

}

}
