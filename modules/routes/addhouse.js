var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var Homes = require( '../models/homes' );
var path = require('path');


mongoose.connect( 'mongodb://localhost:27017/canopusRiddles' );

router.get('/', function(req, res){
    res.sendFile(path.resolve('./public/views/addhouse.html'));
    console.log('in addhouse get');
});

module.exports = router;