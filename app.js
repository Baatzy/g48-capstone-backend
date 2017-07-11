const express = require('express');
const path = require('path');
const app = express();

const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');


const index = require('./routes/index');
// const users = require('./routes/users');
// const profiles = require('./routes/profiles');
// const workouts = require('./routes/workouts');
// const logbooks = require('./routes/logbooks');
// const usersWorkouts = require('./routes/users_workouts');
// const usersUsers = require('./routes/users_users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/', users);
// app.use('/', profiles);
// app.use('/', workouts);
// app.use('/', logbooks);
// app.use('/', users_workouts);
// app.use('/', users_users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
