'use strict';

const express = require('express');
const app = express();
const admin = require('_/admin/router');
const user = require('_/users/router');
const twilio = require('_/twilio-app/router');

app.use(admin);
app.use(user);
app.use(twilio);


module.exports = app;
