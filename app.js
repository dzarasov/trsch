var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cons = require('consolidate');
var sessions = require('client-sessions');


//var dbUrl = 'mongodb://127.0.0.1:27017/yak-yik';
var dbUrl = 'mongodb://dzarasov.mikhail:Mikel55555@ds041678.mlab.com:41678/yak-yik';
mongoose.connect(dbUrl, {
  useMongoClient: true
}, function(err, data) {
  if(err) {
    console.log('Not Connected with Error: ', err);
  } else {
    console.log('Successful connection', data);
  }
})

var routes = require('./routes/index');
var api = require('./routes/api');
var account = require('./routes/account');

var app = express();

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// app.engine('.html', require('ejs').renderFile());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({
  cookieName: 'session',
  secret: 'awefawef',
  duration: 24*60*60*1000, // 1 day
  activeDuration: 30*60*1000
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api);
app.use('/account', account);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
