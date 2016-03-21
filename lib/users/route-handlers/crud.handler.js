'use strict';

const controller = require('_/users/controllers');


// create user with the posted data
module.exports.create = (req, res, next) => {
  const data = {
    body: req.body,
    file: req.file,
  };
  controller.create(data)
  .then((user) => {
    res.json({
      message: 'success',
      user,
    });
    return null;
  })
  .catch((err) => {
    next(err);
    return null;
  });
};


// details calls the user details and sends them via json
module.exports.details = (req, res, next) => {
  const userData = {
    _id: req.params.user,
  };

  controller.details(userData)
  .then((user) => {
    res.json(user);
    return null;
  })
  .catch((err) => {
    next(err);
    return null;
  });
};
