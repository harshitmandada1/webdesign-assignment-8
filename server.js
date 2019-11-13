var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');//created model loading here
var bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/todo_app');
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
var initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Stickies RESTful API server started on: ' + port);