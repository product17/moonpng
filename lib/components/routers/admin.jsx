const React = require('react');
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const App = require('_/components/modules/App.jsx');
const Index = require('_/components/modules/index.jsx');
const Admin = require('_/components/modules/admin-home.jsx');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/behind-the-curtain" component={Admin} />
  </Route>
);
