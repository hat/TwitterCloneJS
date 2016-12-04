'use strict'

var express = require('express');
var app = express();

//Settings of app
app.set('views', './views');
app.set('view engine', 'ejs');

//Add css
//Allows anything in the public folder to be accessible by the browser
app.use(express.static('public'));

//Sends things to the app
app.get('/', function(req, res) {

	res.render('tweets');

});

//Server listen on port 8080
app.listen(8080, function() {

	console.log('Web server listening on port 8080!');

});
