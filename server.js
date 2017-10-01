var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var all = require('./modules/routes/all');
var rentals = require('./modules/routes/rentals');
var forsale = require('./modules/routes/forsale');
var addhouse = require('./modules/routes/addhouse');



var path = require('path');


app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/all', all);
app.use('/rentdb', rentals);
app.use('/saledb', forsale);
// app.use('/addhouse', addhouse);


// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public/views/index.html'));
// });



app.listen(process.env.PORT || 3000); // end server