var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');

var app = express();

app.use(compression());
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(cookieParser());
app.use(session({
	secret: 'cuepath',
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
	next();
});

var index = require('./routes/index.js');
var api = require('./routes/api.js');

app.set('superSecret', config.get('secret'));
// for first load /admin
app.use('/',express.static(path.join(__dirname, '/public/dist')));
// for load /admin/*
app.use('/',index);
// for api app
app.use('/api', api);

var port = config.get('port');
var server = http.createServer(app).listen(port, function () {
	console.log('Express server listening on port ' + port);
});

var io = require('socket.io').listen(server);
global.io = io;

module.exports = app;
