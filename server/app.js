require('dotenv').config();
//dependencies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//passport
var session = require('express-session');
var passport = require('./auth/passport');
var isLoggedIn = require('./utils/auth');
//route variables
var connection = require('./modules/connection');
console.log(connection);
var login = require('./routes/login');
var index = require('./routes/index');
var scholars = require('./routes/scholars');
var orders = require('./routes/orders');
var admin = require('./routes/admin');
var cheese = require('./routes/cheese');
var editMenu = require('./routes/editmenu');
//set port
app.set('port', process.env.PORT || 5050);

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());

//modules n routes
app.use('/login', login);
app.use('/scholars', scholars);
app.use('/orders', orders);
app.use('/admin', admin);
app.use('/cheese', cheese);
app.use('/editMenu', editMenu);
//catch all
app.use('/', index);

//listen
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
