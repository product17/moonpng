'use strict';

const renderToString = require('react-dom/server').renderToString;
const app = require('_/components/build/app-admin');

module.exports.create = (req, res, next) => {
  console.log(app);
  res.json({
    message: 'test',
  });
}
