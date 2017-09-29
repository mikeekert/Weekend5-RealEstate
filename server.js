var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var index = require( './modules/routes/index' );

app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( '/', index );

app.listen( 3000 ); // end server 