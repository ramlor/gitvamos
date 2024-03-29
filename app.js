// variables para manejar distintos paquetes
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//carga index
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); // no lo utilice
//instancio mi variable 
var app = express();

// agrego que voy a utilizar sqlite3 e ingresar a la base
var sqlite3 = require ("sqlite3")
var db = new sqlite3.Database("./persona.db");


// enlace con la carpeta views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("db", db);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// no realice desde aqui enlace para rutas y controladores
