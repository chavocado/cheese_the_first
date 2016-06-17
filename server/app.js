//dependencies
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//route variables
var index = require('./routes/index');
var orders = require('./routes/orders');
var connection = require('./modules/connection');
console.log(connection);
//set port
app.set('port', process.env.PORT || 5000);

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//modules n routes
app.use('/orders', orders);
app.use('/index', index);
//catch all
app.use('/', index);

//listen
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
