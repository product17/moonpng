'use strict';

const chalk = require('chalk');
const mongoose = require('mongoose');

require('node-jsx').install({ extension: '.jsx' });

// Setup Database connection
// const db = mongoose.connect('mongodb://localhost/task-react', (err) => {
//   if (err) {
//     console.error(chalk.red('Could not connect to MongoDB!'));
//     console.log(chalk.red(err));
//   }
// });

// Init the express application
const app = require('./lib/configs/express-config')();

// Run the passport configs
require('./lib/configs/passport-config')();

module.exports = app;
