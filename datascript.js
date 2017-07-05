const MongoClient = require('mongodb').MongoClient;
const data = require('./models/user');

MongoClient.connect('mongodb://localhost:27017/jmddb', (error, db) =>{
  const col = db.collection('robotData');

for (var i = 0; i < data.users.length; i++) {
  col.insert(data.users[i]);
}
});
