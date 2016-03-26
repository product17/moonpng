const React = require('react');
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const App = require('_/components/modules/App.jsx');
const Test = require('_/components/modules/Test.jsx');

module.exports = (
  <Route path="/" component={App}>
    <Route path="/behind-the-curtain" component={Test} />
  </Route>
);
