var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Homes = require('../models/homes');

mongoose.connect('mongodb://localhost:27017/realestate');

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