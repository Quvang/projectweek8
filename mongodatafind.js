/*
 * File Name is  : findCity12.js
 * demoes reading all in a mongo collection
 */
'use strict';

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
    /* Retrieve,
     * reads cities from the database
     */
    db.collection("by").find().toArray(function (err, by) {
        if (err) {
            throw err;
        }
        console.log(by);
        con.close();
    });
});
  
