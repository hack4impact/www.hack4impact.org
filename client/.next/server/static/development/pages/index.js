module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Analytics.js":
/*!*********************************!*\
  !*** ./components/Analytics.js ***!
  \*********************************/
/*! exports provided: initializeGA, logPage, logEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeGA", function() { return initializeGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPage", function() { return logPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);


var initializeGA = function initializeGA() {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-144770649-1');
};

var logPage = function logPage() {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname + window.location.search);
};

var logEvent = function logEvent(name, action) {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
    category: name,
    action: action
  });
};



/***/ }),

/***/ "./components/actionButton.js":
/*!************************************!*\
  !*** ./components/actionButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/actionButton.js";




var ActionButton = function ActionButton(_ref) {
  var link = _ref.link,
      text = _ref.text,
      style = _ref.style,
      white = _ref.white,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, link !== undefined ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: link,
    className: "jsx-3183280296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: style,
    onClick: onClick === undefined && link !== undefined ? null : onClick,
    className: "jsx-3183280296" + " " + ((white ? "white-button styled-btn" : "action-button styled-btn") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, text))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: style,
    onClick: onClick === undefined && link !== undefined ? null : onClick,
    className: "jsx-3183280296" + " " + ((white ? "white-button styled-btn" : "action-button styled-btn") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3183280296",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3183280296",
    __self: this
  }, ".styled-btn.jsx-3183280296{border-image:initial;overflow:hidden;-webkit-transition:all 0.15s ease 0s;transition:all 0.15s ease 0s;height:2.5rem;box-shadow:0 2px 6px rgba(0,0,0,0.15);border-radius:5px;padding:0px 2rem;border:none;color:white;}.styled-btn.jsx-3183280296{font-family:\"Chivo\",sans-serif;font-weight:100;font-size:14px;-webkit-text-decoration:none;text-decoration:none;}.white-button.jsx-3183280296{background:white;}.white-button.jsx-3183280296{color:black !important;}.action-button.jsx-3183280296{background:#155da1;}.action-button.jsx-3183280296{color:white !important;}.styled-btn.jsx-3183280296:hover{box-shadow:rgba(0,0,0,0.12) 3px 5px 20px;-webkit-transition:border 0.2s,background 0.2s,color 0.2s ease-out;transition:border 0.2s,background 0.2s,color 0.2s ease-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvYWN0aW9uQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFHOEIsQUFXVyxBQU1mLEFBR00sQUFHSixBQUlJLEFBSXFCLGlCQWI5QyxFQU1BLEVBdkJrQixFQW9CbEIsQUFPQSxRQWhCa0IsTUFWYSxJQThCZ0MsTUFuQjlDLGVBQ00seUNBWFAsU0FZaEIsS0FYMkMsc0NBQ3ZCLFlBNEJwQixNQTNCbUIsaUJBQ0wsWUFDQSxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvYWN0aW9uQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSAoeyBsaW5rLCB0ZXh0LCBzdHlsZSwgd2hpdGUsIG9uQ2xpY2sgfSkgPT4gKFxuICA8PlxuICAgIHtsaW5rICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICA8TGluayBocmVmPXtsaW5rfT5cbiAgICAgICAgPGEgaHJlZj17bGlua30+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgd2hpdGUgPyBcIndoaXRlLWJ1dHRvbiBzdHlsZWQtYnRuXCIgOiBcImFjdGlvbi1idXR0b24gc3R5bGVkLWJ0blwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgb25DbGljayA9PT0gdW5kZWZpbmVkICYmIGxpbmsgIT09IHVuZGVmaW5lZCA/IG51bGwgOiBvbkNsaWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApIDogKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgd2hpdGUgPyBcIndoaXRlLWJ1dHRvbiBzdHlsZWQtYnRuXCIgOiBcImFjdGlvbi1idXR0b24gc3R5bGVkLWJ0blwiXG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17b25DbGljayA9PT0gdW5kZWZpbmVkICYmIGxpbmsgIT09IHVuZGVmaW5lZCA/IG51bGwgOiBvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8YT57dGV4dH08L2E+XG4gICAgICA8L2J1dHRvbj5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdHlsZWQtYnRuIHtcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZSAwcztcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAycmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5zdHlsZWQtYnRuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2hpdm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAud2hpdGUtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgICAud2hpdGUtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNTVkYTE7XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5zdHlsZWQtYnRuOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAzcHggNXB4IDIwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzLCBiYWNrZ3JvdW5kIDAuMnMsIGNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/actionButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "./components/actionLink.js":
/*!**********************************!*\
  !*** ./components/actionLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/actionLink.js";




var ActionLink = function ActionLink(_ref) {
  var link = _ref.link,
      text = _ref.text,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: "#155da1"
    }, style),
    className: "jsx-1582184130" + " " + "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, text, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1582184130",
    __self: this
  }, ".link.jsx-1582184130{font-weight:400;line-height:1.2;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-size:15px;margin:auto;margin-top:40px;border-bottom:1px solid #3f46ad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvYWN0aW9uTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNa0IsQUFHMkIsZ0JBQ0EsZ0JBQ00seUdBQ1AsZUFDSCxZQUNJLGdCQUNnQixnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL2RhbmllbHRpYW4vRGVza3RvcC9DbHVicy9IYWNrNEltcGFjdC9jb2RlL3d3dy5oYWNrNGltcGFjdC5vcmcvY29tcG9uZW50cy9hY3Rpb25MaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBBY3Rpb25MaW5rID0gKHsgbGluaywgdGV4dCwgc3R5bGUgfSkgPT4gKFxuICA8TGluayBocmVmPXtsaW5rfT5cbiAgICA8YSBjbGFzc05hbWU9e1wibGlua1wifSBzdHlsZT17eyBjb2xvcjogXCIjMTU1ZGExXCIsIC4uLnN0eWxlIH19PlxuICAgICAge3RleHR9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjQ2YWQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2E+XG4gIDwvTGluaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkxpbms7XG4iXX0= */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/actionLink.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionLink);

/***/ }),

/***/ "./components/backgroundSlider.js":
/*!****************************************!*\
  !*** ./components/backgroundSlider.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/backgroundSlider.js";


// default show children twice so slider won't be empty after "sliding" for a while
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var duration = _ref.duration,
      children = _ref.children,
      iterations = _ref.iterations;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2786415788", [duration * 2 || 10]]]) + " " + "slider-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2786415788",
    dynamic: [duration * 2 || 10],
    __self: this
  }, ".slider-container.__jsx-style-dynamic-selector{overflow:hidden;white-space:nowrap;max-width:100%;}.slider-content-wrapper.__jsx-style-dynamic-selector{display:inline-block;white-space:nowrap;overflow:hidden;-webkit-animation:slide-__jsx-style-dynamic-selector ".concat(duration * 2 || 10, "s linear infinite;animation:slide-__jsx-style-dynamic-selector ").concat(duration * 2 || 10, "s linear infinite;}.slider-content-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;}@-webkit-keyframes slide-__jsx-style-dynamic-selector{from{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}to{-webkit-transform:translate3d(-50%,0,0);-ms-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);}}@keyframes slide-__jsx-style-dynamic-selector{from{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}to{-webkit-transform:translate3d(-50%,0,0);-ms-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvYmFja2dyb3VuZFNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHeUIsQUFLSyxBQU1BLEFBSVksQUFHRyxnQkFqQmpCLEtBS0EsQUFNckIsY0FWaUIsS0FLQyxVQUpsQixNQUtnRSwyQ0FROUQsU0FHQSwwSUFWRiIsImZpbGUiOiIvVXNlcnMvZGFuaWVsdGlhbi9EZXNrdG9wL0NsdWJzL0hhY2s0SW1wYWN0L2NvZGUvd3d3LmhhY2s0aW1wYWN0Lm9yZy9jb21wb25lbnRzL2JhY2tncm91bmRTbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZhdWx0IHNob3cgY2hpbGRyZW4gdHdpY2Ugc28gc2xpZGVyIHdvbid0IGJlIGVtcHR5IGFmdGVyIFwic2xpZGluZ1wiIGZvciBhIHdoaWxlXG5leHBvcnQgZGVmYXVsdCAoeyBkdXJhdGlvbiwgY2hpbGRyZW4sIGl0ZXJhdGlvbnMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jb250YWluZXJcIj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5zbGlkZXItY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBhbmltYXRpb246IHNsaWRlICR7ZHVyYXRpb24gKiAyIHx8IDEwfXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuICAgICAgLnNsaWRlci1jb250ZW50LXdyYXBwZXIgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIHtpdGVyYXRpb25zICE9IHVuZGVmaW5lZFxuICAgICAgICA/IFsuLi5BcnJheShpdGVyYXRpb25zKV0ubWFwKHggPT4gPGRpdiBrZXk9e3h9PntjaGlsZHJlbn08L2Rpdj4pXG4gICAgICAgIDogWy4uLkFycmF5KDIpXS5tYXAoeCA9PiA8ZGl2IGtleT17eH0+e2NoaWxkcmVufTwvZGl2Pil9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/backgroundSlider.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2786415788", [duration * 2 || 10]]]) + " " + "slider-content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, iterations != undefined ? Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(iterations)).map(function (x) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: x,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2786415788", [duration * 2 || 10]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, children);
  }) : Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(2)).map(function (x) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: x,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2786415788", [duration * 2 || 10]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, children);
  })));
});

/***/ }),

/***/ "./components/blockQuote.js":
/*!**********************************!*\
  !*** ./components/blockQuote.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/blockQuote.js";


var BlockQuote = function BlockQuote(_ref) {
  var text = _ref.text,
      author = _ref.author,
      position = _ref.position,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "blockquote-fancy",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-right blockquote-fancy-cite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "- Bernardo H. Motta, Ph.D."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-right blockquote-fancy-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Faculty Coordinator of the USFSP Neighborhood News Bureau"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockQuote);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/footer.js";





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1754505048" + " " + "footer-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "5",
    xs: "12",
    className: "footer-left-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1754505048" + " " + "footer-logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/h4i_white.png",
    height: "35",
    width: "200",
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "For all inquiries of partnership or sponsorship, please contact us at", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:contact@hack4impact.org",
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "contact@hack4impact.org"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1754505048" + " " + "col-md-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1754505048" + " " + "col-md-2 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "ORGANIZATION"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "About Us"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://h4i-sponsor.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Sponsorship"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1754505048" + " " + "col-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "EXTRAS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.facebook.com/Hack4Impact/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Facebook"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://github.com/hack4impact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Github"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://medium.com/@hack4impact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:contact@hack4impact.org",
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Email")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://www.notion.so/h4iuiuc/Hack4Impact-UIUC-Official-628a998ceff4491a8267187f364947af",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Notion & Wiki"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1754505048" + " " + "col-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "APPLY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/apply",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Apply"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/apply/students",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Students"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/apply/nonprofits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1754505048",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Non-profits"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1754505048",
    __self: this
  }, "section.jsx-1754505048{background-color:#104a80;min-height:350px;padding-top:70px !important;}.footer-section.jsx-1754505048{background-color:#104a80;min-height:350px;padding-top:70px !important;}.footer-section.jsx-1754505048 h4.jsx-1754505048{font-size:15px;color:#e1e1e1;text-align:left;padding-bottom:9px;}.footer-section.jsx-1754505048 ul.jsx-1754505048{list-style-type:none;text-align:left;padding:0;}.footer-section.jsx-1754505048 li.jsx-1754505048{font-size:15px;padding-bottom:5px;}.footer-logo-box.jsx-1754505048{padding-bottom:20px;}.footer-section.jsx-1754505048 a.jsx-1754505048{color:#8e8d8a;}.footer-section.jsx-1754505048 a.jsx-1754505048:hover{color:#d9d9d9;}.footer-left-div.jsx-1754505048{padding-bottom:30px;}.footer-section.jsx-1754505048 p.jsx-1754505048{color:#d9d9d9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGZ0IsQUFHa0MsQUFLQSxBQU1WLEFBT00sQUFNTixBQUtLLEFBSU4sQUFJQSxBQUlNLEFBSU4sY0FYaEIsQUFJQSxBQVFBLENBbENnQixBQWFLLEtBS3JCLEFBWUEsQ0F2QmtCLElBbEJDLEFBS0EsSUFPRCxLQWFsQixHQU5ZLEtBbEJrQixBQUtBLEdBT1QsRUFPckIsaUJBTkEsTUFaQSxBQUtBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9vdGVyLXNlY3Rpb25cIj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD1cIjVcIiB4cz1cIjEyXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWxlZnQtZGl2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbG9nby1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaDRpX3doaXRlLnBuZ1wiIGhlaWdodD1cIjM1XCIgd2lkdGg9XCIyMDBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRm9yIGFsbCBpbnF1aXJpZXMgb2YgcGFydG5lcnNoaXAgb3Igc3BvbnNvcnNoaXAsIHBsZWFzZSBjb250YWN0IHVzXG4gICAgICAgICAgICBhdHtcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBoYWNrNGltcGFjdC5vcmdcIj5jb250YWN0QGhhY2s0aW1wYWN0Lm9yZzwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBcIj5cbiAgICAgICAgICA8aDQ+T1JHQU5JWkFUSU9OPC9oND5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9oNGktc3BvbnNvci5ub3cuc2hcIj5cbiAgICAgICAgICAgICAgICA8YT5TcG9uc29yc2hpcDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxuICAgICAgICAgIDxoND5FWFRSQVM8L2g0PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9IYWNrNEltcGFjdC9cIj5cbiAgICAgICAgICAgICAgICA8YT5GYWNlYm9vazwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oYWNrNGltcGFjdFwiPlxuICAgICAgICAgICAgICAgIDxhPkdpdGh1YjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AaGFjazRpbXBhY3RcIj5cbiAgICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAaGFjazRpbXBhY3Qub3JnXCI+RW1haWw8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubm90aW9uLnNvL2g0aXVpdWMvSGFjazRJbXBhY3QtVUlVQy1PZmZpY2lhbC02MjhhOTk4Y2VmZjQ0OTFhODI2NzE4N2YzNjQ5NDdhZlwiPlxuICAgICAgICAgICAgICAgIDxhPk5vdGlvbiAmIFdpa2k8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICA8aDQ+QVBQTFk8L2g0PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcHBseVwiPlxuICAgICAgICAgICAgICAgIDxhPkFwcGx5PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwcGx5L3N0dWRlbnRzXCI+XG4gICAgICAgICAgICAgICAgPGE+U3R1ZGVudHM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBwbHkvbm9ucHJvZml0c1wiPlxuICAgICAgICAgICAgICAgIDxhPk5vbi1wcm9maXRzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDRhODA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmZvb3Rlci1zZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNGE4MDtcbiAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItc2VjdGlvbiBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6ICNlMWUxZTE7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItc2VjdGlvbiB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLmZvb3Rlci1zZWN0aW9uIGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgfVxuXG4gICAgICAuZm9vdGVyLWxvZ28tYm94IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItc2VjdGlvbiBhIHtcbiAgICAgICAgY29sb3I6ICM4ZThkOGE7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItc2VjdGlvbiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItbGVmdC1kaXYge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgLmZvb3Rlci1zZWN0aW9uIHAge1xuICAgICAgICBjb2xvcjogI2Q5ZDlkOTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/head.js";



var defaultDescription = "Hack4Impact is a 501 (c)(3) nonprofit organization founded at UPenn, with chapters at various colleges across the United States. We collaborate with nonprofits and other socially responsible organizations to develop software that meets important social and humanitarian needs.";
var defaultOGURL = "www.hack4impact.org";
var defaultOGImage = "/static/icons/favicon-32x32.png";

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.title || "Hack4Impact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-124593378-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/icons/apple-touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/icons/favicon-32x32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/icons/favicon-16x16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/react-toast.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato|Chivo|Heebo:300",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), props.title === "H4I Apply | Nonprofits" || props.title === "H4I Apply | Students" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/react-vertical.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/homepage/banner.js":
/*!***************************************!*\
  !*** ./components/homepage/banner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actionButton */ "./components/actionButton.js");

var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/banner.js";






var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "bannerCont",
    style: {
      marginTop: "100px",
      marginBottom: "30px",
      maxWidth: "1200px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      delay: 100
    }, react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].slow),
    from: {
      opacity: 0,
      transform: "translate3d(-100px,0,0)"
    },
    to: {
      opacity: 100,
      transform: "translate3d(0,0px,0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: "7",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        paddingTop: 5
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/images/banner_sample.svg",
      className: "jsx-197605072",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      delay: 450
    }, react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].slow),
    from: {
      opacity: 0,
      transform: "translate3d(-100px,0,0)"
    },
    to: {
      opacity: 100,
      transform: "translate3d(0,0px,0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: props,
      id: "homepage-main-headline",
      className: "jsx-197605072",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "jsx-197605072",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Software for Nonprofits "));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      delay: 450
    }, react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].slow),
    from: {
      opacity: 0,
      transform: "translate3d(-100px,0,0)"
    },
    to: {
      opacity: 100,
      transform: "translate3d(0,0px,0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: props,
      id: "homepage-sub-headline",
      className: "jsx-197605072",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-197605072",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Hack4Impact is a 501 (c)(3) nonprofit organization founded at UPenn, with chapters at various colleges across the United States. We collaborate with nonprofits and other socially responsible organizations to develop software that meets important social and humanitarian needs."));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-197605072",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      delay: 500
    }, react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].slow),
    from: {
      opacity: 0,
      transform: "translate3d(-100px,0,0)"
    },
    to: {
      opacity: 100,
      transform: "translate3d(0,0px,0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_actionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: props,
      link: "/about",
      text: "Learn More",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      delay: 550
    }, react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].slow),
    from: {
      opacity: 0,
      transform: "translate3d(-100px,0,0)"
    },
    to: {
      opacity: 100,
      transform: "translate3d(0,0px,0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_actionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      white: true,
      link: "/apply",
      text: "Apply",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        marginLeft: "20px"
      }, props),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    });
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "197605072",
    __self: this
  }, "@media (max-width:768px){.banner-section.jsx-197605072{background-size:contain;}}.bannerCont.jsx-197605072{max-width:1500px;margin:0px;color:#fff !important;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;margin-top:30px;}.banner-img.jsx-197605072{width:100%;height:auto;}.banner-section.jsx-197605072{height:650px;padding-top:150px;background-size:cover;}.cta-box.jsx-197605072{padding-top:7px;-webkit-align-content:left;-ms-flex-line-pack:left;align-content:left;}#main-banner-headline.jsx-197605072{margin-bottom:24px;font-family:\"Chivo\",sans-serif;}#homepage-main-headline.jsx-197605072 h1.jsx-197605072{font-size:60px !important;font-weight:600;color:#323648;font-family:\"Chivo\",sans-serif;}#sub-headline.jsx-197605072{max-width:600px;margin:0 auto;}#homepage-sub-headline.jsx-197605072{max-width:600px;margin:0 auto;}#homepage-sub-headline.jsx-197605072 p.jsx-197605072{font-size:17px;margin-bottom:28px auto;color:#323648;font-weight:350;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2UvYmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGTyxBQUlxQyxBQUlULEFBUU4sQUFJRSxBQU1HLEFBS0csQUFLTyxBQU1WLEFBS0EsQUFLRCxXQW5DSCxFQUlNLEVBZ0NNLENBMUJMLEFBZ0JMLEFBS0EsQ0F2Q0gsRUF1QnFCLElBZGxDLENBYkUsRUFnQ2dCLEVBM0JNLEVBa0N4QixBQUtBLENBM0J3QixRQWdDUixHQWhCQSxRQTNCb0IsQUFzQnBDLEdBVkEsQUFnQ2tCLEdBaEJnQixhQWlCbEMsZUE1Q3FDLEVBZ0JyQyxDQVlBLGdDQTNCa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2UvYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBTcHJpbmcsIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4uL2FjdGlvbkJ1dHRvblwiO1xuXG5jb25zdCBCYW5uZXIgPSAoKSA9PiAoXG4gIDxDb250YWluZXJcbiAgICBmbHVpZFxuICAgIGNsYXNzTmFtZT1cImJhbm5lckNvbnRcIlxuICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMDBweFwiLCBtYXJnaW5Cb3R0b206IFwiMzBweFwiLCBtYXhXaWR0aDogXCIxMjAwcHhcIiB9fVxuICA+XG4gICAgPFJvdz5cbiAgICAgIDxTcHJpbmdcbiAgICAgICAgY29uZmlnPXt7IGRlbGF5OiAxMDAsIC4uLmNvbmZpZy5zbG93IH19XG4gICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDBweCwwLDApXCIgfX1cbiAgICAgICAgdG89e3sgb3BhY2l0eTogMTAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwwcHgsMClcIiB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMgPT4gKFxuICAgICAgICAgIDxDb2wgbWQ9XCI3XCIgc3R5bGU9e3sgLi4ucHJvcHMsIHBhZGRpbmdUb3A6IDUgfX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Jhbm5lcl9zYW1wbGUuc3ZnXCIgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKX1cbiAgICAgIDwvU3ByaW5nPlxuICAgICAgPENvbCBtZD1cIjVcIj5cbiAgICAgICAgPFNwcmluZ1xuICAgICAgICAgIGNvbmZpZz17eyBkZWxheTogNDUwLCAuLi5jb25maWcuc2xvdyB9fVxuICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKC0xMDBweCwwLDApXCIgfX1cbiAgICAgICAgICB0bz17eyBvcGFjaXR5OiAxMDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLDBweCwwKVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMgPT4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cHJvcHN9IGlkPVwiaG9tZXBhZ2UtbWFpbi1oZWFkbGluZVwiPlxuICAgICAgICAgICAgICA8aDE+U29mdHdhcmUgZm9yIE5vbnByb2ZpdHMgPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3ByaW5nPlxuICAgICAgICA8U3ByaW5nXG4gICAgICAgICAgY29uZmlnPXt7IGRlbGF5OiA0NTAsIC4uLmNvbmZpZy5zbG93IH19XG4gICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoLTEwMHB4LDAsMClcIiB9fVxuICAgICAgICAgIHRvPXt7IG9wYWNpdHk6IDEwMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsMHB4LDApXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcyA9PiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtwcm9wc30gaWQ9XCJob21lcGFnZS1zdWItaGVhZGxpbmVcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSGFjazRJbXBhY3QgaXMgYSA1MDEgKGMpKDMpIG5vbnByb2ZpdCBvcmdhbml6YXRpb24gZm91bmRlZCBhdFxuICAgICAgICAgICAgICAgIFVQZW5uLCB3aXRoIGNoYXB0ZXJzIGF0IHZhcmlvdXMgY29sbGVnZXMgYWNyb3NzIHRoZSBVbml0ZWRcbiAgICAgICAgICAgICAgICBTdGF0ZXMuIFdlIGNvbGxhYm9yYXRlIHdpdGggbm9ucHJvZml0cyBhbmQgb3RoZXIgc29jaWFsbHlcbiAgICAgICAgICAgICAgICByZXNwb25zaWJsZSBvcmdhbml6YXRpb25zIHRvIGRldmVsb3Agc29mdHdhcmUgdGhhdCBtZWV0c1xuICAgICAgICAgICAgICAgIGltcG9ydGFudCBzb2NpYWwgYW5kIGh1bWFuaXRhcmlhbiBuZWVkcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TcHJpbmc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNwcmluZ1xuICAgICAgICAgICAgY29uZmlnPXt7IGRlbGF5OiA1MDAsIC4uLmNvbmZpZy5zbG93IH19XG4gICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKVwiIH19XG4gICAgICAgICAgICB0bz17eyBvcGFjaXR5OiAxMDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLDBweCwwKVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzID0+IChcbiAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBzdHlsZT17cHJvcHN9IGxpbms9XCIvYWJvdXRcIiB0ZXh0PVwiTGVhcm4gTW9yZVwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3ByaW5nPlxuICAgICAgICAgIDxTcHJpbmdcbiAgICAgICAgICAgIGNvbmZpZz17eyBkZWxheTogNTUwLCAuLi5jb25maWcuc2xvdyB9fVxuICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoLTEwMHB4LDAsMClcIiB9fVxuICAgICAgICAgICAgdG89e3sgb3BhY2l0eTogMTAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwwcHgsMClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcyA9PiAoXG4gICAgICAgICAgICAgIDxBY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICB3aGl0ZVxuICAgICAgICAgICAgICAgIGxpbms9XCIvYXBwbHlcIlxuICAgICAgICAgICAgICAgIHRleHQ9XCJBcHBseVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIC4uLnByb3BzIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3ByaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuYmFubmVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyQ29udCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lci1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXNlY3Rpb24ge1xuICAgICAgICAgIGhlaWdodDogNjUwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY3RhLWJveCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgI21haW4tYmFubmVyLWhlYWRsaW5lIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNoaXZvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAjaG9tZXBhZ2UtbWFpbi1oZWFkbGluZSBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzMyMzY0ODtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJDaGl2b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgICNzdWItaGVhZGxpbmUge1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAjaG9tZXBhZ2Utc3ViLWhlYWRsaW5lIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hvbWVwYWdlLXN1Yi1oZWFkbGluZSBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweCBhdXRvO1xuICAgICAgICAgIGNvbG9yOiAjMzIzNjQ4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iXX0= */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/homepage/clientSlider.js":
/*!*********************************************!*\
  !*** ./components/homepage/clientSlider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _backgroundSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backgroundSlider */ "./components/backgroundSlider.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/clientSlider.js";





var clients = [{
  name: "lwb",
  width: 250,
  height: 55,
  logoPath: "/static/images/client_logos/lwblogo.svg",
  link: "/projects?name=lwb"
}, {
  name: "child&#39;s play",
  width: 140,
  height: 135,
  logoPath: "/static/images/client_logos/cplogogreen.png",
  link: "/projects?name=cp"
}, {
  name: "Kiva-1",
  width: 160,
  height: 55,
  logoPath: "/static/images/client_logos/kivalogo.png",
  link: "/projects?name=kiva-1"
}, {
  name: "philidelphia reads",
  width: 135,
  height: 120,
  logoPath: "/static/images/client_logos/philareadslogo.png",
  link: "/projects?name=pr"
}, {
  name: "C2TC",
  width: 130,
  height: 130,
  logoPath: "/static/images/client_logos/c2tclogo.png",
  link: "/projects?name=safemaps"
}, {
  name: "Global Giving",
  width: 250,
  height: 40,
  logoPath: "/static/images/client_logos/gglogo.png",
  link: "/projects?name=gg-2"
}, {
  name: "Kiva-2",
  width: 160,
  height: 55,
  logoPath: "/static/images/client_logos/kivalogo.png",
  link: "/projects?name=kiva-2"
}, {
  name: "NNB",
  width: 250,
  height: 50,
  logoPath: "/static/images/client_logos/nnblogo.png",
  link: "/projects?name=nnb-1"
}, {
  name: "Product Infrastructure",
  width: 150,
  height: 100,
  logoPath: "/static/images/values/value-1.svg",
  link: "/projects?name=pi"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1546666151" + " " + "showcase-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backgroundSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    duration: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1546666151" + " " + "client-logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, clients.map(function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: client.name,
      className: "jsx-1546666151",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: client.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1546666151",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: client.width,
      height: client.height,
      src: client.logoPath,
      className: "jsx-1546666151",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1546666151",
    __self: this
  }, ".showcase-container.jsx-1546666151{margin-bottom:40px;overflow:hidden;width:100%;}.client-logo-container.jsx-1546666151{white-space:nowrap;overflow:hidden;}.client-logo-container.jsx-1546666151>div.jsx-1546666151{display:inline-block;padding:0 50px;vertical-align:middle;opacity:0.25;outline:none;cursor:default;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;}.client-logo-container.jsx-1546666151>div.jsx-1546666151:hover{opacity:0.8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2UvY2xpZW50U2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGZ0IsQUFHNEIsQUFLQSxBQUlFLEFBU1QsWUFDZCxPQWxCa0IsQUFLQSxFQUlELGNBUkosQUFLYixDQUl3QixVQVJ4QixZQVNlLGFBQ0EsYUFDRSxlQUNjLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWVsdGlhbi9EZXNrdG9wL0NsdWJzL0hhY2s0SW1wYWN0L2NvZGUvd3d3LmhhY2s0aW1wYWN0Lm9yZy9jb21wb25lbnRzL2hvbWVwYWdlL2NsaWVudFNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWNrZ3JvdW5kU2xpZGVyIGZyb20gXCIuLi9iYWNrZ3JvdW5kU2xpZGVyXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBjbGllbnRzID0gW1xuICB7XG4gICAgbmFtZTogXCJsd2JcIixcbiAgICB3aWR0aDogMjUwLFxuICAgIGhlaWdodDogNTUsXG4gICAgbG9nb1BhdGg6IFwiL3N0YXRpYy9pbWFnZXMvY2xpZW50X2xvZ29zL2x3YmxvZ28uc3ZnXCIsXG4gICAgbGluazogXCIvcHJvamVjdHM/bmFtZT1sd2JcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjaGlsZCYjMzk7cyBwbGF5XCIsXG4gICAgd2lkdGg6IDE0MCxcbiAgICBoZWlnaHQ6IDEzNSxcbiAgICBsb2dvUGF0aDogXCIvc3RhdGljL2ltYWdlcy9jbGllbnRfbG9nb3MvY3Bsb2dvZ3JlZW4ucG5nXCIsXG4gICAgbGluazogXCIvcHJvamVjdHM/bmFtZT1jcFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIktpdmEtMVwiLFxuICAgIHdpZHRoOiAxNjAsXG4gICAgaGVpZ2h0OiA1NSxcbiAgICBsb2dvUGF0aDogXCIvc3RhdGljL2ltYWdlcy9jbGllbnRfbG9nb3Mva2l2YWxvZ28ucG5nXCIsXG4gICAgbGluazogXCIvcHJvamVjdHM/bmFtZT1raXZhLTFcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJwaGlsaWRlbHBoaWEgcmVhZHNcIixcbiAgICB3aWR0aDogMTM1LFxuICAgIGhlaWdodDogMTIwLFxuICAgIGxvZ29QYXRoOiBcIi9zdGF0aWMvaW1hZ2VzL2NsaWVudF9sb2dvcy9waGlsYXJlYWRzbG9nby5wbmdcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0cz9uYW1lPXByXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQzJUQ1wiLFxuICAgIHdpZHRoOiAxMzAsXG4gICAgaGVpZ2h0OiAxMzAsXG4gICAgbG9nb1BhdGg6IFwiL3N0YXRpYy9pbWFnZXMvY2xpZW50X2xvZ29zL2MydGNsb2dvLnBuZ1wiLFxuICAgIGxpbms6IFwiL3Byb2plY3RzP25hbWU9c2FmZW1hcHNcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHbG9iYWwgR2l2aW5nXCIsXG4gICAgd2lkdGg6IDI1MCxcbiAgICBoZWlnaHQ6IDQwLFxuICAgIGxvZ29QYXRoOiBcIi9zdGF0aWMvaW1hZ2VzL2NsaWVudF9sb2dvcy9nZ2xvZ28ucG5nXCIsXG4gICAgbGluazogXCIvcHJvamVjdHM/bmFtZT1nZy0yXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2l2YS0yXCIsXG4gICAgd2lkdGg6IDE2MCxcbiAgICBoZWlnaHQ6IDU1LFxuICAgIGxvZ29QYXRoOiBcIi9zdGF0aWMvaW1hZ2VzL2NsaWVudF9sb2dvcy9raXZhbG9nby5wbmdcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0cz9uYW1lPWtpdmEtMlwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5OQlwiLFxuICAgIHdpZHRoOiAyNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBsb2dvUGF0aDogXCIvc3RhdGljL2ltYWdlcy9jbGllbnRfbG9nb3Mvbm5ibG9nby5wbmdcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0cz9uYW1lPW5uYi0xXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvZHVjdCBJbmZyYXN0cnVjdHVyZVwiLFxuICAgIHdpZHRoOiAxNTAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgbG9nb1BhdGg6IFwiL3N0YXRpYy9pbWFnZXMvdmFsdWVzL3ZhbHVlLTEuc3ZnXCIsXG4gICAgbGluazogXCIvcHJvamVjdHM/bmFtZT1waVwiXG4gIH1cbl07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxSb3c+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG93Y2FzZS1jb250YWluZXJcIj5cbiAgICAgIDxCYWNrZ3JvdW5kU2xpZGVyIGR1cmF0aW9uPXs0MH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWxvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICAge2NsaWVudHMubWFwKGNsaWVudCA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2xpZW50Lm5hbWV9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtjbGllbnQubGlua30+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtjbGllbnQud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17Y2xpZW50LmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjbGllbnQubG9nb1BhdGh9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYWNrZ3JvdW5kU2xpZGVyPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zaG93Y2FzZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jbGllbnQtbG9nby1jb250YWluZXIge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmNsaWVudC1sb2dvLWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBvcGFjaXR5OiAwLjI1O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICAgICAgfVxuICAgICAgLmNsaWVudC1sb2dvLWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUm93PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/clientSlider.js */"));
});

/***/ }),

/***/ "./components/homepage/involveSection.js":
/*!***********************************************!*\
  !*** ./components/homepage/involveSection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var _blockQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockQuote */ "./components/blockQuote.js");
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actionButton */ "./components/actionButton.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/involveSection.js";








var InvolveSection = function InvolveSection() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    grey: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3081270690" + " " + "section-title text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Get Involved")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "involved-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3081270690" + " " + "involved-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3081270690" + " " + "text-title text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Students"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/apply/students",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/h4i-funny.jpg",
    className: "jsx-3081270690" + " " + "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      padding: "38px 0 35px 0"
    },
    className: "jsx-3081270690",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Are you passionate about software and Social Impact? Are you looking to join a unique and close-knit community? Join Us! Our mission provides a distinct experience to develop technical skills and interact with nonprofit clients all while applying your skills to impact real lives."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3081270690" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    white: true,
    link: "/apply/students",
    text: "Learn More",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "5",
    className: "offset-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3081270690" + " " + "involved-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3081270690" + " " + "text-title text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Nonprofits"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/apply/students",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/team-cheer.jpg",
    className: "jsx-3081270690" + " " + "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blockQuote__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Working with Hack4Impact was easy, efficient and incredibly productive. They were quick to understand what we were looking to achieve and made the app even better and simpler to use than what I had imagined.",
    author: "- Bernardo H. Motta, Ph.D.",
    position: "Faculty Coordinator of the USFSP Neighborhood News Bureau",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3081270690" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    white: true,
    link: "/apply/nonprofits",
    text: "Learn More",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3081270690",
    __self: this
  }, "img.jsx-3081270690{display:block;margin:7% auto;border-radius:5px;box-shadow:2px 2px 2px grey;max-height:260px;}.involved-container.jsx-3081270690{margin-top:30px;}.involved-container.jsx-3081270690 h3.jsx-3081270690{color:#666b72;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2UvaW52b2x2ZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVnQixBQUd1QixBQU9FLEFBR0YsY0FUQyxBQVVqQixFQUhBLGFBTm9CLGtCQUNVLDRCQUNYLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvZGFuaWVsdGlhbi9EZXNrdG9wL0NsdWJzL0hhY2s0SW1wYWN0L2NvZGUvd3d3LmhhY2s0aW1wYWN0Lm9yZy9jb21wb25lbnRzL2hvbWVwYWdlL2ludm9sdmVTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uXCI7XG5pbXBvcnQgQmxvY2tRdW90ZSBmcm9tIFwiLi4vYmxvY2tRdW90ZVwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi4vYWN0aW9uQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEludm9sdmVTZWN0aW9uID0gKCkgPT4gKFxuICA8U2VjdGlvbiBncmV5PlxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIG1kPVwiMTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZSB0ZXh0LWNlbnRlclwiPkdldCBJbnZvbHZlZDwvaDE+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImludm9sdmVkLWJvZHlcIj5cbiAgICAgICAgICA8Q29sIG1kPVwiNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvbHZlZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdGl0bGUgdGV4dC1jZW50ZXJcIj5TdHVkZW50czwvaDM+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBwbHkvc3R1ZGVudHNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2g0aS1mdW5ueS5qcGdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMzhweCAwIDM1cHggMFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFyZSB5b3UgcGFzc2lvbmF0ZSBhYm91dCBzb2Z0d2FyZSBhbmQgU29jaWFsIEltcGFjdD8gQXJlIHlvdVxuICAgICAgICAgICAgICAgIGxvb2tpbmcgdG8gam9pbiBhIHVuaXF1ZSBhbmQgY2xvc2Uta25pdCBjb21tdW5pdHk/IEpvaW4gVXMhIE91clxuICAgICAgICAgICAgICAgIG1pc3Npb24gcHJvdmlkZXMgYSBkaXN0aW5jdCBleHBlcmllbmNlIHRvIGRldmVsb3AgdGVjaG5pY2FsXG4gICAgICAgICAgICAgICAgc2tpbGxzIGFuZCBpbnRlcmFjdCB3aXRoIG5vbnByb2ZpdCBjbGllbnRzIGFsbCB3aGlsZSBhcHBseWluZ1xuICAgICAgICAgICAgICAgIHlvdXIgc2tpbGxzIHRvIGltcGFjdCByZWFsIGxpdmVzLlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gd2hpdGUgbGluaz1cIi9hcHBseS9zdHVkZW50c1wiIHRleHQ9XCJMZWFybiBNb3JlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIG1kPVwiNVwiIGNsYXNzTmFtZT1cIm9mZnNldC1tZC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludm9sdmVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10aXRsZSB0ZXh0LWNlbnRlclwiPk5vbnByb2ZpdHM8L2gzPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwcGx5L3N0dWRlbnRzXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdGVhbS1jaGVlci5qcGdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPEJsb2NrUXVvdGVcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJXb3JraW5nIHdpdGggSGFjazRJbXBhY3Qgd2FzIGVhc3ksIGVmZmljaWVudCBhbmQgaW5jcmVkaWJseVxuICAgICAgICAgICAgICBwcm9kdWN0aXZlLiBUaGV5IHdlcmUgcXVpY2sgdG8gdW5kZXJzdGFuZCB3aGF0IHdlIHdlcmUgbG9va2luZyB0b1xuICAgICAgICAgICAgICBhY2hpZXZlIGFuZCBtYWRlIHRoZSBhcHAgZXZlbiBiZXR0ZXIgYW5kIHNpbXBsZXIgdG8gdXNlIHRoYW4gd2hhdFxuICAgICAgICAgICAgICBJIGhhZCBpbWFnaW5lZC5cIlxuICAgICAgICAgICAgICAgICAgYXV0aG9yPVwiLSBCZXJuYXJkbyBILiBNb3R0YSwgUGguRC5cIlxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJGYWN1bHR5IENvb3JkaW5hdG9yIG9mIHRoZSBVU0ZTUCBOZWlnaGJvcmhvb2QgTmV3cyBCdXJlYXVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL2FwcGx5L25vbnByb2ZpdHNcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTGVhcm4gTW9yZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDclIGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JleTtcbiAgICAgICAgbWF4LWhlaWdodDogMjYwcHg7IC8qIFRlbXBvcmFyeSB0byBwcmVzZXJ2ZSBpbWFnZSBoZWlnaHRzICovXG4gICAgICB9XG4gICAgICAuaW52b2x2ZWQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5pbnZvbHZlZC1jb250YWluZXIgaDMge1xuICAgICAgICBjb2xvcjogIzY2NmI3MjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEludm9sdmVTZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/involveSection.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (InvolveSection);

/***/ }),

/***/ "./components/homepage/otherChapters.js":
/*!**********************************************!*\
  !*** ./components/homepage/otherChapters.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var _backgroundSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backgroundSlider */ "./components/backgroundSlider.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/otherChapters.js";






var clients = [{
  name: "upenn",
  width: 125,
  height: 36,
  logoPath: "/static/images/chapters/upenn/upenn-logo.jpg",
  link: "https://hack4impact.org"
}, {
  name: "uiuc",
  width: 125,
  height: 36,
  logoPath: "/static/images/chapters/uiuc/uiuc-logo.jpg",
  link: "https://uiuc.hack4impact.org"
}, {
  name: "gt",
  width: 125,
  height: 55,
  logoPath: "/static/images/chapters/gt/gt-logo.png",
  link: "https://bitsofgood.org"
}, {
  name: "bu",
  width: 75,
  height: 75,
  logoPath: "/static/images/chapters/bu/bu-logo.png",
  link: "https://www.hack4impactbu.com/index.html"
}, {
  name: "calpoly",
  width: 75,
  height: 75,
  logoPath: "/static/images/chapters/calpoly/calpoly-logo.png",
  link: "https://hack4impact-calpoly.github.io/index.html"
}, {
  name: "uchicago",
  width: 75,
  height: 75,
  logoPath: "/static/images/chapters/uchicago/uchicago-logo.png",
  link: "https://www.facebook.com/h4iuchicago/"
}, {
  name: "cornell",
  width: 75,
  height: 75,
  logoPath: "/static/images/chapters/cornell/cornell-logo.png",
  link: "https://www.facebook.com/h4icornell/"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "chapters-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "section-title center",
    style: {
      marginBottom: "75px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Other Chapters")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3192129859" + " " + "showcase-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_backgroundSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    iterations: 4,
    duration: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3192129859" + " " + "client-logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, clients.map(function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: client.name,
      className: "jsx-3192129859",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: client.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      className: "jsx-3192129859",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: client.width,
      height: client.height,
      src: client.logoPath,
      className: "jsx-3192129859",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3192129859",
    __self: this
  }, ".chapters-section.jsx-3192129859 h2.jsx-3192129859{font-size:20px;text-align:center;margin-bottom:50px;color:#373f46;opacity:0.7;font-weight:300;}.showcase-container.jsx-3192129859{margin-bottom:40px;overflow:hidden;width:100%;}.client-logo-container.jsx-3192129859{white-space:nowrap;overflow:hidden;}.client-logo-container.jsx-3192129859>div.jsx-3192129859{display:inline-block;padding:0 50px;vertical-align:middle;opacity:0.25;outline:none;cursor:default;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;}.client-logo-container.jsx-3192129859>div.jsx-3192129859:hover{opacity:0.8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2Uvb3RoZXJDaGFwdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzBCLEFBUUksQUFLQSxBQUlFLEFBU1QsWUFDZCxHQTFCb0IsSUFRRixBQUtBLEVBSUQsWUFoQkksRUFRUixBQUtiLENBSXdCLFVBUnhCLE1BUmdCLE1BaUJELFFBaEJELEtBaUJDLE9BaEJHLE1BaUJELFVBaEJqQixLQWlCK0Isa0VBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2Uvb3RoZXJDaGFwdGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uXCI7XG5pbXBvcnQgQmFja2dyb3VuZFNsaWRlciBmcm9tIFwiLi4vYmFja2dyb3VuZFNsaWRlclwiO1xuaW1wb3J0IHsgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgY2xpZW50cyA9IFtcbiAge1xuICAgIG5hbWU6IFwidXBlbm5cIixcbiAgICB3aWR0aDogMTI1LFxuICAgIGhlaWdodDogMzYsXG4gICAgbG9nb1BhdGg6IFwiL3N0YXRpYy9pbWFnZXMvY2hhcHRlcnMvdXBlbm4vdXBlbm4tbG9nby5qcGdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vaGFjazRpbXBhY3Qub3JnXCJcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJ1aXVjXCIsXG4gICAgd2lkdGg6IDEyNSxcbiAgICBoZWlnaHQ6IDM2LFxuICAgIGxvZ29QYXRoOiBcIi9zdGF0aWMvaW1hZ2VzL2NoYXB0ZXJzL3VpdWMvdWl1Yy1sb2dvLmpwZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly91aXVjLmhhY2s0aW1wYWN0Lm9yZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImd0XCIsXG4gICAgd2lkdGg6IDEyNSxcbiAgICBoZWlnaHQ6IDU1LFxuICAgIGxvZ29QYXRoOiBcIi9zdGF0aWMvaW1hZ2VzL2NoYXB0ZXJzL2d0L2d0LWxvZ28ucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL2JpdHNvZmdvb2Qub3JnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiYnVcIixcbiAgICB3aWR0aDogNzUsXG4gICAgaGVpZ2h0OiA3NSxcbiAgICBsb2dvUGF0aDogXCIvc3RhdGljL2ltYWdlcy9jaGFwdGVycy9idS9idS1sb2dvLnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuaGFjazRpbXBhY3RidS5jb20vaW5kZXguaHRtbFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNhbHBvbHlcIixcbiAgICB3aWR0aDogNzUsXG4gICAgaGVpZ2h0OiA3NSxcbiAgICBsb2dvUGF0aDogXCIvc3RhdGljL2ltYWdlcy9jaGFwdGVycy9jYWxwb2x5L2NhbHBvbHktbG9nby5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vaGFjazRpbXBhY3QtY2FscG9seS5naXRodWIuaW8vaW5kZXguaHRtbFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInVjaGljYWdvXCIsXG4gICAgd2lkdGg6IDc1LFxuICAgIGhlaWdodDogNzUsXG4gICAgbG9nb1BhdGg6IFwiL3N0YXRpYy9pbWFnZXMvY2hhcHRlcnMvdWNoaWNhZ28vdWNoaWNhZ28tbG9nby5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9oNGl1Y2hpY2Fnby9cIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjb3JuZWxsXCIsXG4gICAgd2lkdGg6IDc1LFxuICAgIGhlaWdodDogNzUsXG4gICAgbG9nb1BhdGg6IFwiL3N0YXRpYy9pbWFnZXMvY2hhcHRlcnMvY29ybmVsbC9jb3JuZWxsLWxvZ28ucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaDRpY29ybmVsbC9cIlxuICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8U2VjdGlvbiBjbGFzc05hbWU9XCJjaGFwdGVycy1zZWN0aW9uXCI+XG4gICAgPFJvdz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlIGNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI3NXB4XCIgfX0+XG4gICAgICAgIE90aGVyIENoYXB0ZXJzXG4gICAgICA8L2gxPlxuICAgIDwvUm93PlxuICAgIDxSb3c+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3djYXNlLWNvbnRhaW5lclwiPlxuICAgICAgICA8QmFja2dyb3VuZFNsaWRlciBpdGVyYXRpb25zPXs0fSBkdXJhdGlvbj17NTB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWxvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Y2xpZW50cy5tYXAoY2xpZW50ID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NsaWVudC5uYW1lfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtjbGllbnQubGlua30+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtjbGllbnQud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtjbGllbnQuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2xpZW50LmxvZ29QYXRofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CYWNrZ3JvdW5kU2xpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jaGFwdGVycy1zZWN0aW9uIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgY29sb3I6ICMzNzNmNDY7XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNob3djYXNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jbGllbnQtbG9nby1jb250YWluZXIge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuY2xpZW50LWxvZ28tY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICAuY2xpZW50LWxvZ28tY29udGFpbmVyID4gZGl2OmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1Jvdz5cbiAgPC9TZWN0aW9uPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/otherChapters.js */")));
});

/***/ }),

/***/ "./components/homepage/ourWork.js":
/*!****************************************!*\
  !*** ./components/homepage/ourWork.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projectContainer */ "./components/projectContainer.js");
/* harmony import */ var _actionLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actionLink */ "./components/actionLink.js");
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/ourWork.js";








var items = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  title: "Kiva",
  subtitle: "How might we expedite the reporting process with a single portal where users can see which documents need to be uploaded and track their progress?",
  image: "url('/static/images/projects/kiva-2/kiva2-thumbnail copy.png')",
  link: "/projects?name=kiva-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  title: "SafeMaps",
  subtitle: "How might we make students feel safer on campus?",
  image: "url('/static/images/projects/safemaps/sm-safemaps-cover.png')",
  link: "/projects?name=safemaps",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_projectContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  title: "Global Giving",
  subtitle: "How might we expand Global Giving\u2019s impact and reach on domestic and international nonprofits?",
  image: "url('/static/images/projects/gg-2/gg2-thumbnail.png')",
  link: "/projects?name=gg-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})];

var OurWorkSection = function OurWorkSection() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Spring"], {
    config: {
      delay: 600,
      tension: 100,
      fraction: 100
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: props,
      id: "our-work-title-box",
      className: "jsx-3112034854",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-3112034854" + " " + "title text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "We believe in using tech for good."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-3112034854" + " " + "subtitle text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Each semester, we work with three to five non-profits with the opportunity to build a great product that solves a core need. We work in small groups led by a product manager and technical lead to scope and develop the application, taking into account our clients\u2019 requirements and suggestions"));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3112034854" + " " + "project-showcase-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["Trail"], {
    items: items,
    keys: function keys(item) {
      return item.key;
    },
    config: {
      delay: 1200
    },
    from: {
      opacity: 0,
      transform: "translate3d(0,200px,0)"
    },
    to: {
      opacity: 100,
      transform: "translate3d(0,0px,0)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, function (item) {
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        key: item.key,
        sm: "4",
        style: props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, item);
    };
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      paddingTop: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: "View our other projects",
    link: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3112034854",
    __self: this
  }, ".subtitle.jsx-3112034854{padding-top:10px;color:#5b5e6d;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}#our-work-title-box.jsx-3112034854{text-align:center;margin:0 20px 40px 20px;}.project-showcase-box.jsx-3112034854{padding:10px 10px 5px 10px;}.link.jsx-3112034854{font-weight:400;line-height:1.2;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-size:15px;margin:auto;border-bottom:1px solid #3f46ad;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2Uvb3VyV29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWdCLEFBRzBCLEFBS0MsQUFJUyxBQUdYLGdCQUNBLENBWkYsQ0FLVSxTQUkxQixJQVJxQixDQVlHLFVBUHhCLGtGQUpBLGFBWWlCLGVBQ0gsWUFDb0IsZ0NBQ2hCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWVsdGlhbi9EZXNrdG9wL0NsdWJzL0hhY2s0SW1wYWN0L2NvZGUvd3d3LmhhY2s0aW1wYWN0Lm9yZy9jb21wb25lbnRzL2hvbWVwYWdlL291cldvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU3ByaW5nLCBUcmFpbCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uXCI7XG5pbXBvcnQgUHJvamVjdENvbnRhaW5lciBmcm9tIFwiLi4vcHJvamVjdENvbnRhaW5lclwiO1xuaW1wb3J0IEFjdGlvbkxpbmsgZnJvbSBcIi4uL2FjdGlvbkxpbmtcIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gIDxQcm9qZWN0Q29udGFpbmVyXG4gICAgdGl0bGU9XCJLaXZhXCJcbiAgICBzdWJ0aXRsZT1cIkhvdyBtaWdodCB3ZSBleHBlZGl0ZSB0aGUgcmVwb3J0aW5nIHByb2Nlc3Mgd2l0aCBhIHNpbmdsZSBwb3J0YWwgd2hlcmUgdXNlcnMgY2FuIHNlZSB3aGljaCBkb2N1bWVudHMgbmVlZCB0byBiZSB1cGxvYWRlZCBhbmQgdHJhY2sgdGhlaXIgcHJvZ3Jlc3M/XCJcbiAgICBpbWFnZT1cInVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMva2l2YS0yL2tpdmEyLXRodW1ibmFpbCBjb3B5LnBuZycpXCJcbiAgICBsaW5rPVwiL3Byb2plY3RzP25hbWU9a2l2YS0yXCJcbiAgLz4sXG4gIDxQcm9qZWN0Q29udGFpbmVyXG4gICAgdGl0bGU9XCJTYWZlTWFwc1wiXG4gICAgc3VidGl0bGU9XCJIb3cgbWlnaHQgd2UgbWFrZSBzdHVkZW50cyBmZWVsIHNhZmVyIG9uIGNhbXB1cz9cIlxuICAgIGltYWdlPVwidXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9zYWZlbWFwcy9zbS1zYWZlbWFwcy1jb3Zlci5wbmcnKVwiXG4gICAgbGluaz1cIi9wcm9qZWN0cz9uYW1lPXNhZmVtYXBzXCJcbiAgLz4sXG4gIDxQcm9qZWN0Q29udGFpbmVyXG4gICAgdGl0bGU9XCJHbG9iYWwgR2l2aW5nXCJcbiAgICBzdWJ0aXRsZT1cIkhvdyBtaWdodCB3ZSBleHBhbmQgR2xvYmFsIEdpdmluZ+KAmXMgaW1wYWN0IGFuZCByZWFjaCBvbiBkb21lc3RpYyBhbmQgaW50ZXJuYXRpb25hbCBub25wcm9maXRzP1wiXG4gICAgaW1hZ2U9XCJ1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL2dnLTIvZ2cyLXRodW1ibmFpbC5wbmcnKVwiXG4gICAgbGluaz1cIi9wcm9qZWN0cz9uYW1lPWdnLTJcIlxuICAvPlxuXTtcblxuY29uc3QgT3VyV29ya1NlY3Rpb24gPSAoKSA9PiAoXG4gIDxTZWN0aW9uPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3ByaW5nXG4gICAgICAgIGNvbmZpZz17eyBkZWxheTogNjAwLCB0ZW5zaW9uOiAxMDAsIGZyYWN0aW9uOiAxMDAgfX1cbiAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIHRvPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzID0+IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtwcm9wc30gaWQ9XCJvdXItd29yay10aXRsZS1ib3hcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBXZSBiZWxpZXZlIGluIHVzaW5nIHRlY2ggZm9yIGdvb2QuXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgRWFjaCBzZW1lc3Rlciwgd2Ugd29yayB3aXRoIHRocmVlIHRvIGZpdmUgbm9uLXByb2ZpdHMgd2l0aCB0aGVcbiAgICAgICAgICAgICAgb3Bwb3J0dW5pdHkgdG8gYnVpbGQgYSBncmVhdCBwcm9kdWN0IHRoYXQgc29sdmVzIGEgY29yZSBuZWVkLiBXZVxuICAgICAgICAgICAgICB3b3JrIGluIHNtYWxsIGdyb3VwcyBsZWQgYnkgYSBwcm9kdWN0IG1hbmFnZXIgYW5kIHRlY2huaWNhbCBsZWFkXG4gICAgICAgICAgICAgIHRvIHNjb3BlIGFuZCBkZXZlbG9wIHRoZSBhcHBsaWNhdGlvbiwgdGFraW5nIGludG8gYWNjb3VudCBvdXJcbiAgICAgICAgICAgICAgY2xpZW50c+KAmSByZXF1aXJlbWVudHMgYW5kIHN1Z2dlc3Rpb25zXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1NwcmluZz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXNob3djYXNlLWJveFwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxUcmFpbFxuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAga2V5cz17aXRlbSA9PiBpdGVtLmtleX1cbiAgICAgICAgICAgIGNvbmZpZz17eyBkZWxheTogMTIwMCB9fVxuICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoMCwyMDBweCwwKVwiIH19XG4gICAgICAgICAgICB0bz17eyBvcGFjaXR5OiAxMDAsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLDBweCwwKVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW0gPT4gcHJvcHMgPT4gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17aXRlbS5rZXl9IHNtPVwiNFwiIHN0eWxlPXtwcm9wc30+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RyYWlsPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjVweFwiIH19PlxuICAgICAgICA8QWN0aW9uTGluayB0ZXh0PVwiVmlldyBvdXIgb3RoZXIgcHJvamVjdHNcIiBsaW5rPVwiL3Byb2plY3RzXCIgLz5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzViNWU2ZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIH1cbiAgICAgICNvdXItd29yay10aXRsZS1ib3gge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDQwcHggMjBweDtcbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0LXNob3djYXNlLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMTBweDtcbiAgICAgIH1cbiAgICAgIC5saW5rIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2Y0NmFkO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT3VyV29ya1NlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/ourWork.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OurWorkSection);

/***/ }),

/***/ "./components/homepage/partnerSection.js":
/*!***********************************************!*\
  !*** ./components/homepage/partnerSection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionLink */ "./components/actionLink.js");
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/partnerSection.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "partners-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      marginBottom: "50px"
    },
    className: "jsx-2440333605" + " " + "section-title center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Our Sponsors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    width: "210",
    height: "80",
    src: "/static/images/engineering.png",
    className: "jsx-2440333605" + " " + "center partner-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    width: "260",
    height: "65",
    src: "/static/images/wharton.png",
    className: "jsx-2440333605" + " " + "center partner-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2440333605" + " " + "center partner-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Partner With Us",
    link: "https://h4i-sponsor.now.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2440333605",
    __self: this
  }, ".partners-section.jsx-2440333605 h2.jsx-2440333605{font-size:20px;text-align:center;margin-bottom:50px;color:#373f46;opacity:0.7;font-weight:300;}.partner-button.jsx-2440333605{margin-top:30px !important;}.partner-logos.jsx-2440333605{margin:10px 60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvaG9tZXBhZ2UvcGFydG5lclNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQixBQUd3QixBQVFZLEFBR1YsZUFWQyxFQVdwQixVQUhBLE1BUHFCLG1CQUNMLGNBQ0YsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbmllbHRpYW4vRGVza3RvcC9DbHVicy9IYWNrNEltcGFjdC9jb2RlL3d3dy5oYWNrNGltcGFjdC5vcmcvY29tcG9uZW50cy9ob21lcGFnZS9wYXJ0bmVyU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9uXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFjdGlvbkxpbmsgZnJvbSBcIi4uL2FjdGlvbkxpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8U2VjdGlvbiBjbGFzc05hbWU9XCJwYXJ0bmVycy1zZWN0aW9uXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlIGNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1MHB4XCIgfX0+XG4gICAgICAgICAgT3VyIFNwb25zb3JzXG4gICAgICAgIDwvaDE+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHdpZHRoPVwiMjEwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2VuZ2luZWVyaW5nLnBuZ1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXIgcGFydG5lci1sb2dvc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgd2lkdGg9XCIyNjBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjVcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd2hhcnRvbi5wbmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VudGVyIHBhcnRuZXItbG9nb3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIHBhcnRuZXItYnV0dG9uXCI+XG4gICAgICAgICAgPEFjdGlvbkxpbmtcbiAgICAgICAgICAgIHRleHQ9XCJQYXJ0bmVyIFdpdGggVXNcIlxuICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vaDRpLXNwb25zb3Iubm93LnNoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wYXJ0bmVycy1zZWN0aW9uIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGNvbG9yOiAjMzczZjQ2O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICB9XG4gICAgICAucGFydG5lci1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAucGFydG5lci1sb2dvcyB7XG4gICAgICAgIG1hcmdpbjogMTBweCA2MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9TZWN0aW9uPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/homepage/partnerSection.js */"));
});

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/nav.js";





var NavigationBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavigationBar, _React$Component);

  function NavigationBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "state", {
      isTop: true,
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener("scroll", function () {
        var isTop = window.scrollY < 100;

        if (isTop !== _this2.state.isTop) {
          _this2.setState({
            isTop: isTop
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
        className: "navbar-expand-lg navbar-dark fixed-top ".concat(this.state.isTop ? "" : "shadow bg-white"),
        id: this.props.navType ? this.props.navType : "mainNav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavbarBrand"], {
        className: "js-scroll-trigger",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        id: "logo-img",
        height: "35",
        width: "200",
        src: "/static/images/colored-logo.png",
        alttext: "Hack4Impact logo",
        className: "jsx-3794128114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavbarToggler"], {
        onClick: this.toggleNavbar,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Collapse"], {
        navbar: true,
        isOpen: !this.state.collapsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
        navbar: true,
        className: "text-uppercase ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        prefetch: true,
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-3794128114" + " " + "nav-link pl-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        prefetch: true,
        href: "/projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-3794128114" + " " + "nav-link pl-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Projects"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        prefetch: true,
        href: "https://medium.com/@hack4impact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-3794128114" + " " + "nav-link pl-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        prefetch: true,
        href: "/apply",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-3794128114" + " " + "nav-link pl-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Apply")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3794128114",
        __self: this
      }, ".bg-white.jsx-3794128114{background-color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFb0IsQUFHc0MseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBDb250YWluZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXZiYXJUb2dnbGVyLFxuICBDb2xsYXBzZSxcbiAgTmF2SXRlbSxcbiAgTmF2XG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpc1RvcDogdHJ1ZSxcbiAgICBjb2xsYXBzZWQ6IHRydWVcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc1RvcCA9IHdpbmRvdy5zY3JvbGxZIDwgMTAwO1xuICAgICAgaWYgKGlzVG9wICE9PSB0aGlzLnN0YXRlLmlzVG9wKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RvcCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZFxuICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZiYXJcbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBmaXhlZC10b3AgJHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzVG9wID8gXCJcIiA6IFwic2hhZG93IGJnLXdoaXRlXCJcbiAgICAgICAgfWB9XG4gICAgICAgIGlkPXt0aGlzLnByb3BzLm5hdlR5cGUgPyB0aGlzLnByb3BzLm5hdlR5cGUgOiBcIm1haW5OYXZcIn1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8TmF2YmFyQnJhbmQgY2xhc3NOYW1lPVwianMtc2Nyb2xsLXRyaWdnZXJcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBpZD1cImxvZ28taW1nXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NvbG9yZWQtbG9nby5wbmdcIlxuICAgICAgICAgICAgICBhbHR0ZXh0PVwiSGFjazRJbXBhY3QgbG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dGhpcy50b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgIDxDb2xsYXBzZSBuYXZiYXIgaXNPcGVuPXshdGhpcy5zdGF0ZS5jb2xsYXBzZWR9PlxuICAgICAgICAgICAgPE5hdiBuYXZiYXIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBwbC0zXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHBsLTNcIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AaGFjazRpbXBhY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHBsLTNcIj5CbG9nPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL2FwcGx5XCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBwbC0zXCI+QXBwbHk8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5iZy13aGl0ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl19 */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/nav.js */"));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./components/projectContainer.js":
/*!****************************************!*\
  !*** ./components/projectContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/projectContainer.js";


 // Used in Homescreen

var ProjectContainer = function ProjectContainer(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image,
      link = _ref.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-4213583669",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), ".concat(image)
    },
    className: "jsx-4213583669" + " " + "project-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-4213583669",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4213583669",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, subtitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4213583669",
    __self: this
  }, "@media (max-width:768px){.project-item.jsx-4213583669{margin:60px 0;}p.jsx-4213583669{padding-top:20px;}}.project-item.jsx-4213583669{box-shadow:3px 3px 20px rgba(44,62,80,0.1);background-position:center;background-size:cover;background-repeat:no-repeat;border-radius:5px;color:#f9fafc;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;overflow:hidden;padding:20px;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;height:95%;width:auto;min-height:200px;}.project-item.jsx-4213583669:hover{box-shadow:0 4px 12px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}p.jsx-4213583669{margin:0px;color:#f9fafc;font-weight:650;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvcHJvamVjdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBSTJCLEFBR0csQUFJMkIsQUFpQlosQUFHdkIsV0FDRyxHQTNCZCxHQUdBLFFBeUJnQixnQkFDbEIsRUF0QjZCLDJCQUNMLENBZ0J4QixxQkFmOEIsNEJBQ1Ysa0JBQ0osY0FDRCwwRUFDWSxpR0FDVCxnQkFDSCxhQUNJLCtEQUNOLFdBQ0EsV0FDTSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2RhbmllbHRpYW4vRGVza3RvcC9DbHVicy9IYWNrNEltcGFjdC9jb2RlL3d3dy5oYWNrNGltcGFjdC5vcmcvY29tcG9uZW50cy9wcm9qZWN0Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gVXNlZCBpbiBIb21lc2NyZWVuXG5cbmNvbnN0IFByb2plY3RDb250YWluZXIgPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlLCBsaW5rIH0pID0+IChcbiAgPExpbmsgaHJlZj17bGlua30+XG4gICAgPGE+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtaXRlbVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCAke2ltYWdlfWBcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICA8cD57c3VidGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5wcm9qZWN0LWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWl0ZW0ge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDQ0LCA2MiwgODAsIDAuMSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNmOWZhZmM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgY29sb3I6ICNmOWZhZmM7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDY1MDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYT5cbiAgPC9MaW5rPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/projectContainer.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectContainer);

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/section.js";




var Section = function Section(_ref) {
  var children = _ref.children,
      grey = _ref.grey,
      darkgrey = _ref.darkgrey;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "typical-section",
    style: {
      background: grey ? "rgb(250, 251, 252)" : darkgrey ? "#ebeff2" : undefined
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-38778126",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "38778126",
    __self: this
  }, "@media (max-width:768px){section.jsx-38778126{padding:300px 0;height:600px;}}.typical-section.jsx-38778126{padding:100px 0;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvc2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhUyxBQUkrQixBQUtGLGdCQUpELEFBS0gsWUFDZCxDQUxFIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBncmV5LCBkYXJrZ3JleSB9KSA9PiAoXG4gIDxzZWN0aW9uXG4gICAgY2xhc3NOYW1lPVwidHlwaWNhbC1zZWN0aW9uXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogZ3JleSA/IFwicmdiKDI1MCwgMjUxLCAyNTIpXCIgOiBkYXJrZ3JleSA/IFwiI2ViZWZmMlwiIDogdW5kZWZpbmVkXG4gICAgfX1cbiAgPlxuICAgIDxkaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwMHB4IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC50eXBpY2FsLXNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuLy8gcmdiKDI1MCwgMjUxLCAyNTIpICFpbXBvcnRhbnRcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/section.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Section); // rgb(250, 251, 252) !important

/***/ }),

/***/ "./components/toastText.js":
/*!*********************************!*\
  !*** ./components/toastText.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/toastText.js";




var ToastText = function ToastText(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/apply/students",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1774835425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1774835425",
    __self: this
  }, "a.jsx-1774835425{color:#ffff;padding-left:10px !important;font-weight:400;}a.jsx-1774835425:hover{color:#155da1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvdG9hc3RUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUdxQixBQUtFLFlBSmUsRUFLL0IsMkJBSmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWVsdGlhbi9EZXNrdG9wL0NsdWJzL0hhY2s0SW1wYWN0L2NvZGUvd3d3LmhhY2s0aW1wYWN0Lm9yZy9jb21wb25lbnRzL3RvYXN0VGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgVG9hc3RUZXh0ID0gKHsgdGV4dCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9hcHBseS9zdHVkZW50c1wiPlxuICAgICAgPGE+e3RleHR9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmZmZmO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzE1NWRhMTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcbmV4cG9ydCBkZWZhdWx0IFRvYXN0VGV4dDtcbiJdfQ== */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/toastText.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ToastText);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? url_1.format(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? url_1.format(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_homepage_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/homepage/banner */ "./components/homepage/banner.js");
/* harmony import */ var _components_homepage_ourWork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/homepage/ourWork */ "./components/homepage/ourWork.js");
/* harmony import */ var _components_homepage_involveSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/homepage/involveSection */ "./components/homepage/involveSection.js");
/* harmony import */ var _components_homepage_clientSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/homepage/clientSlider */ "./components/homepage/clientSlider.js");
/* harmony import */ var _components_homepage_partnerSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/homepage/partnerSection */ "./components/homepage/partnerSection.js");
/* harmony import */ var _components_homepage_otherChapters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/homepage/otherChapters */ "./components/homepage/otherChapters.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_toastText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/toastText */ "./components/toastText.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_Analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Analytics */ "./components/Analytics.js");





var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/pages/index.js";














var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // need to open it once component is mounted bc of "document not found errors"
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_12__["toast"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_toastText__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "Student Applications are Open!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), {
        className: "announcement",
        bodyClassName: "announcement-body"
      });
      Object(_components_Analytics__WEBPACK_IMPORTED_MODULE_17__["initializeGA"])();
      Object(_components_Analytics__WEBPACK_IMPORTED_MODULE_17__["logPage"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Hack4Impact | Software for Nonprofits",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        navType: "mainNav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_homepage_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_homepage_ourWork__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_homepage_clientSlider__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_homepage_involveSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_homepage_partnerSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_homepage_otherChapters__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map