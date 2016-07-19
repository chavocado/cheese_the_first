//dependencies
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//passport
// var session = require('express-session');
// var passport = require('./auth/passport');
// var isLoggedIn = require('./utils/auth');
//route variables
var connection = require('./modules/connection');
console.log(connection);
var login = require('./routes/login');
var index = require('./routes/index');
var orders = require('./routes/orders');



//set port
app.set('port', process.env.PORT || 5000);

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport
// app.use(passport.initialize());
// app.use(passport.session());
//modules n routes
// app.use('/login', login);
app.use('/orders', orders);
app.use('/index', index);

//catch all
app.use('/', index);

//listen
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
