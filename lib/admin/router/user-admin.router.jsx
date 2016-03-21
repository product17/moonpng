// 'use strict';
//
// const express = require('express');
// const handler = require('_/admin/route-handlers');
// const router = express.Router();
// const app = express();
//
// // These routes are rooted at /behind-the-curtain/user
// router.route('/create')
// .get(handler.create);
//
//
// app.use(router);
//
// module.exports = app;


const express = require('express');
const React = require('react');
// we'll use this to render our app to an html string
const renderToString = require('react-dom/server').renderToString;
// and these to match the url to routes and then render
const reactRouter = require('react-router');
const RouterContext = reactRouter.RouterContext;
const routes = require('_/components/routers/admin');
const app = express();
// ...
console.log(routes)
// send all requests to index.html so browserHistory works

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `;
}


app.get('/create', (req, res) => {
  // match the routes to the url
  reactRouter.match({ routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is the what `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    console.log(props);
    const appHtml = renderToString(<RouterContext {...props} />);

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml));
  });
});

module.exports = app;
