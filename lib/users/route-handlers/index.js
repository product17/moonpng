'use strict';

const _ = require('lodash');
const path = require('path');
const glob = require('glob');
const fileList = glob.sync('./lib/users/route-handlers/!(index).js');

// This exports all files, these files must have unique names
_.forEach(fileList, (fileName) => {
  _.assign(module.exports, require(`./${path.basename(fileName)}`));
});
