// const data = require('../models/user.js');
const MongoClient = require("mongodb").MongoClient;

module.exports = {
  index: (req, res) => {
    MongoClient.connect('mongodb://localhost:27017/jmddb', (error, db) =>{
      const col = db.collection('robotData');
      context = {};
      col.find({}).toArray((error, results) => {
        context.model = results;
        // console.log(context.model);
        res.render('index', context);
      });
    });
  },
  profile: (req, res) => {
    MongoClient.connect('mongodb://localhost:27017/jmddb', (error, db) =>{
      const col = db.collection('robotData');
      let context = {};
      let id = parseInt(req.params.id);
      col.find({'id': id}).toArray((error, results) => {
        context.model = results;
        // console.log(context.model);
        res.render('profile', context);
      });
    });
  },
  looking: (req, res) => {
    MongoClient.connect('mongodb://localhost:27017/jmddb', (error, db) =>{
      const col = db.collection('robotData');
      context = {};
      // let id = parseInt(req.params.id);
      col.find({'job': null}).toArray((error, results) => {
        context.model = results;
        console.log(context.model);
        res.render('index', context);
      });
    });
  },
  employed: (req, res) => {
    MongoClient.connect('mongodb://localhost:27017/jmddb', (error, db) =>{
      const col = db.collection('robotData');
      context = {};
      // let id = parseInt(req.params.id);
      col.find({'job': {$ne: null}}).toArray((error, results) => {
        context.model = results;
        console.log(context.model);
        res.render('index', context);
      });
    });
  }
  // profile: (req, res) => {
  //   let user = {};
  //   for (let i = 0; i < data.users.length; i++) {
  //     user = data.users[i];
  //     if (user.id == req.params.id) {
  //       break;
  //     }
  //   }
  //   res.render('profile', user);
  // }
};
