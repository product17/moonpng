'use strict';

const express = require('express');
const app = express();

// Routers
const smsApi = require('./sms-api.router');

app.use('/twilio', smsApi);

module.exports = app;
