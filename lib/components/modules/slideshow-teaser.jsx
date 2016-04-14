'use strict';

const React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div className='col-xs-6'>
        <img className='img-responsive' src='/public/images/defaults/default.jpg' />
        <p>{this.props.title}</p>
      </div>
    );
  },
});
