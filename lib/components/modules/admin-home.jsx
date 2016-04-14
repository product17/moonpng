'use strict';

const React = require('react');
const SlideshowList = require('./slideshow-list.jsx');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>MoonPNG Admin Pages</h1>
        <p>testing</p>
        <SlideshowList />
      </div>
    );
  },
});
