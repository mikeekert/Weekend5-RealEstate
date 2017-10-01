var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var Homes = require( '../models/homes' );
var path = require('path');

var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = 'mongodb://<dbuser>:<dbpassword>@ds157584.mlab.com:57584/heroku_9vkt39sw';
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(databaseURI);


// mongoose.connect( 'mongodb://localhost:27017/canopusRiddles' );

router.get('/', function(req, res){
    res.sendFile(path.resolve('./public/views/addhouse.html'));
    console.log('in addhouse get');
});

module.exports = router;