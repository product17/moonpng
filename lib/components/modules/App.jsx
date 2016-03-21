const React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        {this.props.children}
      </div>
    );
  },
});
