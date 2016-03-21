const React = require('react');
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const App = require('../modules/App');
const Test = require('../modules/Test');

module.exports = (
  <Route path="/" component={App}>
    <Route path="/behind-the-curtain/user/create" component={Test} />
  </Route>
);
