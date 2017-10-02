var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var Home = require( '../models/homes' );

router.get( '/', function( req, res ){
    res.sendFile( path.resolve( 'public/views/houseview.html' ) );
}); // end base url


module.exports = router;