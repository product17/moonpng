'use strict';

const express = require('express');
const user = require('./user-admin.router.jsx');
const app = express();


// Keep the ability to access the root level route
app.use('/behind-the-curtain/user', user);


module.exports = app;
