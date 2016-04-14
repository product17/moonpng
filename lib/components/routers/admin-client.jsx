const React = require('react');
const render = require('react-dom').render;
const Router = require('react-router');
const browserHistory = require('react-router').browserHistory;
// require routes and pass them into <Router/>
const routes = require('./admin');

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);
