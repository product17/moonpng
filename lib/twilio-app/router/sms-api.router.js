'use strict';
const express = require('express');
const app = express();
const router = express.Router();

const controller = require('_/twilio-app/controllers');

router.route('/message')
  .get(controller.onMessage)
  .post(controller.onMessage);

app.use(router);

module.exports = app;
