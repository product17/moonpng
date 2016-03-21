/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _indexAdmin = __webpack_require__(4);

	var _indexAdmin2 = _interopRequireDefault(_indexAdmin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ...

	// send all requests to index.html so browserHistory works

	// and these to match the url to routes and then render
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

	app.get('/create', function (req, res) {
	  // match the routes to the url
	  (0, _reactRouter.match)({ routes: _indexAdmin2.default, location: req.url }, function (err, redirect, props) {
	    // `RouterContext` is the what `Router` renders. `Router` keeps these
	    // `props` in its state as it listens to `browserHistory`. But on the
	    // server our app is stateless, so we need to use `match` to
	    // get these props before rendering.
	    var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));

	    // dump the HTML into a template, lots of ways to do this, but none are
	    // really influenced by React Router, so we're just using a little
	    // function, `renderPage`
	    res.send(renderPage(appHtml));
	  });
	});
	// we'll use this to render our app to an html string


	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	module.exports = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/******/(function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	})(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		'use strict';

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactRouter = __webpack_require__(2);

		var _App = __webpack_require__(3);

		var _App2 = _interopRequireDefault(_App);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		module.exports = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: Home }), _react2.default.createElement(_reactRouter.Route, { path: '/repos', component: Repos }, _react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: Repo })), _react2.default.createElement(_reactRouter.Route, { path: '/about', component: About }));

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(1);

		/***/
	},
	/* 2 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	},
	/* 3 */
	/***/function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = _react2.default.createClass({
			displayName: 'App',
			render: function render() {
				return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'React Router Tutorial'), this.props.children);
			}
		});

		/***/
	}
	/******/]);

/***/ }
/******/ ]);