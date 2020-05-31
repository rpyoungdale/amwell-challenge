(this["webpackJsonpamwell-challenge"] = this["webpackJsonpamwell-challenge"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 30vmin;\n  pointer-events: none;\n  align-self: flex-start;\n}\n\n.App-header {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.get-data {\n  height: 50px;\n}\n\n.data {\n  /* justify-content: center; */\n  /* align-items: center; */\n  /* flex-direction: row; */\n  border-width: 10px;\n  border-color: blue;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _amwell_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amwell-logo.png */ "./src/amwell-logo.png");
/* harmony import */ var _amwell_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_amwell_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LowestThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LowestThree */ "./src/LowestThree.js");
var _jsxFileName = "/Users/ryanyoungdale/AmwellChallenge/amwell-challenge/src/App.js";





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _amwell_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "App-logo",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LowestThree__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/LowestThree.js":
/*!****************************!*\
  !*** ./src/LowestThree.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LowestThree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanyoungdale/AmwellChallenge/amwell-challenge/src/LowestThree.js";

function LowestThree() {
  const [lowestThree, setLowestThree] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getLowestThreeNums = async () => {
    let res = await fetch('/screen/string.txt');
    let text = await res.text();
    let unsortedDataArray = text.split(/\r?\n/); // Maps and filters the data simultaneously. If !isNaN(parseInt(data))
    // evaluates to true, that indicates that the element does not contain
    // letters. If the current element des not contain letters, it is kept
    // and added to the dataElements array as an integer. If it does contain
    // letters, it is not added to the array.

    let dataElements = unsortedDataArray.flatMap(data => {
      return !isNaN(parseInt(data)) ? [parseInt(data)] : [];
    });
    dataElements.sort((a, b) => a - b); // Creates a new Set with the array which removes the duplicates
    // because sets can only have unique values. The spread operator is
    // then used to convert the unique values back into an array.

    dataElements = [...new Set(dataElements)];
    setLowestThree(dataElements.slice(0, 3));
  };

  if (!lowestThree.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "get-data",
      onClick: () => getLowestThreeNums(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, "Get lowest three numbers!");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, lowestThree[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, lowestThree[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, lowestThree[2]));
  }
}

/***/ }),

/***/ "./src/amwell-logo.png":
/*!*****************************!*\
  !*** ./src/amwell-logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/ryanyoungdale/AmwellChallenge/amwell-challenge/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ryanyoungdale/AmwellChallenge/amwell-challenge/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ryanyoungdale/AmwellChallenge/amwell-challenge/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ryanyoungdale/AmwellChallenge/amwell-challenge/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map