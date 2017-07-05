var express = require('express');
var mustacheExpress = require('mustache-express');
var data = require('./models/user');
var path = require('path');
var userController = require('./controllers/user');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/index', userController.index);

app.get('/:id', userController.profile);


app.listen(3000, function () {
  console.log('listening');
});
