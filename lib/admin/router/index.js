'use strict';

const express = require('express');
// const user = require('./user-admin.router.jsx');
const admin = require('./admin.router');
const app = express();

// Keep the ability to access the root level route
// app.use('/behind-the-curtain/user', user);
app.use('/', admin);
app.use('/behind-the-curtain', admin);
app.use('/behind-the-curtain/home', admin);


module.exports = app;
