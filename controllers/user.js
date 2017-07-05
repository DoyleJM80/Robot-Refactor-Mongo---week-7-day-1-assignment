var data = require('../models/user.js');

module.exports = {
  index: function (req, res) {
    res.render('index', data);
  },
  profile: function (req, res) {
    var user = {};
    for (var i = 0; i < data.users.length; i++) {
      user = data.users[i];
      if (user.id == req.params.id) {
        break;
      }
    }
    res.render('profile', user);
  }
};
