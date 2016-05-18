var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();
app.use(morgan('dev'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('GitStarted-API app listening at http://%s:%s', host, port);
});

require('./routes')(app);

app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));