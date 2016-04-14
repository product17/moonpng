'use strict';

const React = require('react');
const _ = require('lodash');
const SlideshowTeaser = require('_/components/modules/slideshow-teaser.jsx');

module.exports = React.createClass({
  list: ['My Show', 'Wedding Stuff'],

  render() {
    return (
      <div>
        {_.map(this.list, (title, i) => <SlideshowTeaser key={i} title={title} />)}
      </div>
    );
  },
});
