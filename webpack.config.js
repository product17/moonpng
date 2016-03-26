'use strict';

const path = require('path');

module.exports = {
  entry: './lib/components/routers/admin.jsx',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'admin.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: ['node_modules'],
        loader: 'babel',
      },
    ],
  },
};
