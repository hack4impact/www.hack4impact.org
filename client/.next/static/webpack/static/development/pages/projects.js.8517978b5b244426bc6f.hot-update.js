webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/newprojectList.js":
/*!***********************************************!*\
  !*** ./components/projects/newprojectList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _projectCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCards */ "./components/projects/projectCards.js");
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/projects/newprojectList.js";




var projectList = function projectList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "section-title center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "2019 Fall Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "4",
    sm: "6",
    style: {
      marginBottom: "25px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_projectCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Hello",
    imgPath: "",
    link: "hello",
    subTitle: "hello",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (projectList);

/***/ }),

/***/ "./components/projects/projectCards.js":
/*!*********************************************!*\
  !*** ./components/projects/projectCards.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _actionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionButton */ "./components/actionButton.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/projects/projectCards.js";





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      imgPath = _ref.imgPath,
      link = _ref.link,
      subTitle = _ref.subTitle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "bg-light mb-3 project-card h-100",
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imgPath,
    alt: title,
    className: "jsx-669616421" + " " + "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "jsx-669616421" + " " + "text-title card-title text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    id: "card-text",
    className: "jsx-669616421" + " " + "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, subTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-669616421" + " " + "text-center action-btn-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_actionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    white: true,
    text: "Read More",
    link: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "669616421",
    __self: this
  }, ".action-btn-box.jsx-669616421{margin-top:30px;}.project-card.jsx-669616421:hover{box-shadow:0 5px 30px rgba(44,62,80,0.1);}.project-card.jsx-669616421{border:none;height:100% !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdENhcmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCZ0IsQUFHeUIsQUFHNEIsQUFHaEMsWUFDVyxJQU56QixtQkFPQSxNQUpBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZWx0aWFuL0Rlc2t0b3AvQ2x1YnMvSGFjazRJbXBhY3QvY29kZS93d3cuaGFjazRpbXBhY3Qub3JnL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdENhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHkgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi4vYWN0aW9uQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBpbWdQYXRoLCBsaW5rLCBzdWJUaXRsZSB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj17bGlua30+XG4gICAgICA8Q2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodCBtYi0zIHByb2plY3QtY2FyZCBoLTEwMFwiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2ltZ1BhdGh9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC10aXRsZSBjYXJkLXRpdGxlIHRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBpZD1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAge3N1YlRpdGxlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGFjdGlvbi1idG4tYm94XCI+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIHdoaXRlIHRleHQ9XCJSZWFkIE1vcmVcIiBsaW5rPXtsaW5rfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgPC9DYXJkPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYWN0aW9uLWJ0bi1ib3gge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuICAgICAgLnByb2plY3QtY2FyZDpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSg0NCwgNjIsIDgwLCAwLjEpO1xuICAgICAgfVxuICAgICAgLnByb2plY3QtY2FyZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/danieltian/Desktop/Clubs/Hack4Impact/code/www.hack4impact.org/components/projects/projectCards.js */"));
});

/***/ })

})
//# sourceMappingURL=projects.js.8517978b5b244426bc6f.hot-update.js.map