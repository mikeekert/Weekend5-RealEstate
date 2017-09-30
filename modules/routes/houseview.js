var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Homes = require('../models/homes');

mongoose.connect('mongodb://localhost:27017/realestate');

router.get('/', function (req, res) {
    console.log('in homes get');
    Homes.find({}, function (err, response) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    });
}); // end messages get


module.exports = router;