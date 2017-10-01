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
    console.log('in all get');
    Homes.find({}, function (err, response) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
}); // end messages get

router.post( '/', function( req, res ){
    console.log( 'in riddles post:', req.body );
    var home = new Home (req.body);
    home.save( function (err){
        if(err) {
        console.log('DB err', err);
        res.sendStatus(500);
    }//END if err
    else {
        res.sendStatus(200);
    }//ENd else
    })//END riddles save
}); //end messages post


module.exports = router;