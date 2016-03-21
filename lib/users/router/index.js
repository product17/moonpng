'use strict';

const express = require('express');
const app = express();
const crud = require('./crud.router.js');

// Keeping the ability to access the root level route
app.use('/user', crud);

module.exports = app;
