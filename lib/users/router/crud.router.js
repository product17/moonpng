'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const handler = require('_/users/route-handlers');

// These routes are rooted at /user
router.route('/create')
.post(handler.create);

// router.route('/details/:user')
// .get(handler.details);

// router.route('/list')
// .get(handler.list);

// router.route('/update/:user')
// .put(handler.update);

// router.route('/delete/:user')
// .delete(handler.delete);

app.use(router);

module.exports = app;
