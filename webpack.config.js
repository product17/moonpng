'use strict';

module.exports = {
  entry: '_/admin/',
  output: {
    path: __dirname,
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
