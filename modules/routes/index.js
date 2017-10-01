var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var Home = require( '../models/homes' );

router.get( '/', function( req, res ){
    res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url

router.post( '/', function(req, res){

        console.log( 'in add listing post:', req.body );
        var ridd = new Home (req.body);
        ridd.save( function (err){
            if(err) {
            console.log('DB err', err);
            res.sendStatus(500);
        }//END if err
        else {
            res.sendStatus(200);
        }//ENd else
    }); //end messages post
    

    
});

module.exports = router;