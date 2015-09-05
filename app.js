var express     = require('express');               // call express
var app         = express();                        // define our app using express
var bodyParser  = require('body-parser');

var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/towns'); // connect to our database

var port        = process.env.PORT || 8081;
var entities    = require('./app/models/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/entity/town'      , entities.town);


app.listen(port);
console.log('Runing sales app on port ' + port);
