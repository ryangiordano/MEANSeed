var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//import routes


var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/mean-angular');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

//routes
// app.use('/user', userRoutes);
// app.use('/message',messageRoutes);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');


// all other routes are handled by Angular
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/../../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Angular 2 Full Stack listening on port '+app.get('port'));
});
});
