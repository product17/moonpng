'use strict';

const env = process.env.NODE_ENV;

const config = {
  development: {
    db_path: 'mongodb://localhost/moonpng',
  },
  production: {
    db_path: 'mongodb://localhost/moonpng',
  },
};

module.exports = function getEnv() {
  return config[env];
};
