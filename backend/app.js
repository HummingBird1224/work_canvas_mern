var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var express = require('express');
var cors = require('cors')
var expressValidator = require('express-validator');
var indexRouter = require('./routes/index');
var enterpriseRouter = require('./routes/enterprise');
// var gachasRouter = require('./routes/gachas');

var app = express()
app.use(cors())
// Express validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    console.log(param, msg, value);
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//set static dir
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./models");
db.sequelize.sync();


//routers
app.use('/', indexRouter);
app.use('/enterprise', enterpriseRouter);
// app.use('/gachas', gachasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // console.log(err);
  res.status(err.status || 500).json(err);
});

module.exports = app;
