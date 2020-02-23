'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the routing mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");
const lib = require("../private/libWebUtil");
const continents = require("../private/continents");
const experimental = require("../private/myTemplater"); // highly experimental template
const experimental1 = require("../private/myCountry"); // myCountry template
const experimental2 = require("../private/myCities"); // myCities template
const experimental3 = require("../private/myLanguage"); // myLanguage template
const administration = require("../private/myAdmin"); // myAdmin template
const experimental4 = require("../private/af"); // myAdmin template


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

    receiveDataCountry(req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });

        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;

        let newCountry = {
          navn: obj.POST.navn,
          kontinent: obj.POST.kontinent,
          areal: obj.POST.areal,
          befolkningstal: obj.POST.befolkningstal,
          styreform: obj.POST.styreform
        };

        mongo.connect(
            constr, { useNewUrlParser: true, useUnifiedTopology: true},
                                                        function (error, con) {
            if (error) {
                throw error;
            }
            console.log(`Connected to server`);
            const db = con.db(dbname);                  // make dbname the current db
            /* Update,
             * updates/inserts city in the database
             */

            db.collection("country").updateOne(
                newCountry, {"$set": obj}, {upsert: true}, function (err, landOpdater) {
                if (err) {
                    throw err;
                }
                console.log("City inserted/updated");
                res.write(administration.admin(obj));
                con.close();
                res.end();
            });
        });

      },

  receiveDataCity(req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });


        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;
        checkCont = continents[cont];

        let newCity = {
          navn: obj.POST.navn,
          kontinent: obj.POST.kontinent,
          areal: obj.POST.areal,
          befolkningstal: obj.POST.befolkningstal,
          styreform: obj.POST.styreform
        };

        let findCity = {};

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            console.log(`Connected to server`);
            const db = con.db(dbname);                  // make dbname the current db
            /* Update,
             * updates/inserts city in the database
             */

            db.collection("by").findOne(findCity).then(isThere => {console.log(isThere);
                if(isThere === null){
                  console.log("Landet eksistere ikke");
                  res.write(administration.admin(obj));
                  con.close();
                  res.end();
                }else{
                  console.log("Landet eksistere allerede");
                  db.collection("by").findOne(findCity).then(isThere => {
                    db.collection("by").updateOne(findCity, {"$set": newCity}, {upsert: true}, function(err, collection) {
                      if (err) {
                        throw err;
                      }
                      console.log("City inserted/updated");
                      res.write(administration.admin(obj));
                      con.close();
                      res.end();
                    });
                  });
                }
             });

            });
    },

    receiveDataLanguage(req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });


        const mongo = require('mongodb');
        const dbname = "world";
        const constr = `mongodb://localhost:27017`;
        checkCont = continents[cont];

        let newLanguage = {
          navn: obj.POST.navn,
          kontinent: obj.POST.kontinent,
          areal: obj.POST.areal,
          befolkningstal: obj.POST.befolkningstal,
          styreform: obj.POST.styreform
        };

        let findCountry = {};

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
            if (error) {
                throw error;
            }
            console.log(`Connected to server`);
            const db = con.db(dbname);                  // make dbname the current db
            /* Update,
             * updates/inserts city in the database
             */

            db.collection("sprog").findOne(findCountry).then(isThere => {console.log(isThere);
                if(isThere === null){
                  console.log("Landet eksistere ikke");
                  res.write(administration.admin(obj));
                  con.close();
                  res.end();
                }else{
                  console.log("Landet eksistere allerede");
                  db.collection("sprog").findOne(findCountry).then(isThere => {
                    db.collection("city").updateOne(findCountry, {"$set": newCountry}, {upsert: true}, function(err, collection) {
                      if (err) {
                        throw err;
                      }
                      console.log("Sprog inserted/updated");
                      res.write(administration.admin(obj));
                      con.close();
                      res.end();
                    });
                  });
                }
             });

        });
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

    findCountryByContinent(req, res, cont) {
      const mongo = require(`mongodb`);
      const dbname = "world";
      const constr = `mongodb://localhost:27017`;
      let continent = "kontinent";
      cont = cont.substr(1);
      cont = continents[cont];
      mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true}, function (error, con) {
          if (error) {
              throw error;
          }
          const db = con.db(dbname);                  // make dbname the current db
          /* Retrieve,
           * reads cities from the database
           */
          let query = {};
          query[continent] = cont;
          console.log(query);
          db.collection("country").find(query).toArray(function (err, specific) {
              if (err) {
                  throw err;
              }
              res.writeHead(httpStatus.OK, {
                 "Content-Type": "text/html; charset=utf-8" } ); /* yes, write relevant header */
              res.write(experimental4.continent(specific));           // home made templating for native node
              con.close();
              res.end();
          });
      });
  },

}
