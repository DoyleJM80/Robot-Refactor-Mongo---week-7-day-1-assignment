const express = require('express');
const mustacheExpress = require('mustache-express');
// const data = require('./models/user');
const path = require('path');
const userController = require('./controllers/user');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
//   MongoClient.connect('mongodb://localhost:27017/jmddb', (errors, db) => {
//
//   });
// });

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/index', userController.index);
app.get('/:id', userController.profile);
app.post('/looking', userController.looking);
app.post('/employed', userController.employed);


app.listen(3000, function () {
  console.log('listening');
});
