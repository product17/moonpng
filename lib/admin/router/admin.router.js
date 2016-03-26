'use strict';

const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const reactRouter = require('react-router');
const routerContext = reactRouter.RouterContext;
const routes = require('_/components/routers/admin');
const path = require('path');

// This section of the app was not linking to the correct views folder
// overriding with views declaration.
app.set('views', path.join(__dirname, '../../views'));


app.get('/', (req, res) => {
  // match the routes to the url
  reactRouter.match({ routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.

    const context = React.createFactory(routerContext);
    // console.log('test', context(props));
    const appHtml = renderToString(context(props));

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.render('index', {
      reactApp: appHtml,
    });
  });
});

module.exports = app;
