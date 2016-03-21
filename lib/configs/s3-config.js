'use strict';

const config = {
  development: {
    dir: 'moonpng-drop',
  },
};

module.exports = config[process.env.NODE_ENV];
