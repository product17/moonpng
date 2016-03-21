'use strict';

const express = require('express');
const app = express();
const admin = require('_/admin/router');
const user = require('_/users/router');

app.use(admin);
app.use(user);

module.exports = app;
