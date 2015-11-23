// server.js

// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 7070;

// connect to our mongoDB database
require('./models/user');
mongoose.connect(db.url);

// passport config
require('./config/passport');
app.use(passport.initialize());

app.use(morgan('dev')); // log every request to the console

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/frontend'));

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
