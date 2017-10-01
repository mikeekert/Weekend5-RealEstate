var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Homes = require('../models/homes');

var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(databaseURI);
router.get('/', function (req, res) {
    console.log('in rentals get');
    Homes.find({ rent: {$exists: true} }, function (err, response) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
}); // end messages get


module.exports = router;