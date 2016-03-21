'use strict';

const User = require('mongoose').model('user');

// Save userData to the database
module.exports.create = (userData) => new Promise((resolve, reject) => {
  const user = new User(userData);

  user.save((err) => {
    if (err) {
      reject(err);
    } else {
      resolve(user);
    }
  });
});

// Get user data from the database
module.exports.details = (userData) => new Promise((resolve, reject) => {
  // Remove password and salt from result
  User.findOne(userData._id, { password: 0, salt: 0 })
  .exec((err, user) => {
    if (err) {
      reject(err);
    } else {
      resolve(user);
    }
  });
});
