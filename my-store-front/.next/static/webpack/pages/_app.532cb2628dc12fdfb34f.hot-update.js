"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/nav-bar.jsx":
/*!***************************************!*\
  !*** ./components/layout/nav-bar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _context_display_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/display-context */ \"./context/display-context.js\");\n/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/store-context */ \"./context/store-context.js\");\n/* harmony import */ var _styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/nav-bar.module.css */ \"./styles/nav-bar.module.css\");\n/* harmony import */ var _styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/landing-page.module.css */ \"./styles/landing-page.module.css\");\n/* harmony import */ var _styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helper-functions */ \"./utils/helper-functions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/akarshjain/Downloads/Pixelz-Ark/my-store-front/components/layout/nav-bar.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar NavBar = function NavBar() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_display_context__WEBPACK_IMPORTED_MODULE_2__.default),\n      updateCartViewDisplay = _useContext.updateCartViewDisplay;\n\n  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_3__.default),\n      cart = _useContext2.cart;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isCheckout = _useState[0],\n      setIsCheckout = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (router.pathname === \"/checkout\" || router.pathname === \"/payment\") {\n      setIsCheckout(true);\n    } else {\n      setIsCheckout(false);\n    }\n  }, [router.pathname]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n    \"class\": \"nav-bar sticky-top\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"nav\", {\n      \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar), \" navbar-expand-lg navbar-light\"),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        \"class\": \"container-fluid\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h5\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n            \"class\": \"navbar-brand mx-4 text-white\",\n            href: \"/\",\n            children: \"BookStore\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          \"class\": \"navbar-toggler\",\n          type: \"button\",\n          \"data-bs-toggle\": \"collapse\",\n          \"data-bs-target\": \"#navbarNav\",\n          \"aria-controls\": \"navbarNav\",\n          \"aria-expanded\": \"false\",\n          \"aria-label\": \"Toggle navigation\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"i\", {\n              \"class\": \"fas fa-bars\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          \"class\": \"collapse navbar-collapse\",\n          id: \"navbarNav\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n            \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar), \" navbar-nav ms-auto mx-4\"),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn), \" text-white\"),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                \"class\": \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link), \" text-white\"),\n                href: \"#\".concat((_styles_landing_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().aboutus)),\n                children: \"ABOUT US\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 25\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n              \"class\": \"nav-item mx-2\",\n              children: !isCheckout ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n                className: \"\".concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn), \" \").concat((_styles_nav_bar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav_link), \" text-white\"),\n                onClick: function onClick() {\n                  return updateCartViewDisplay();\n                },\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiShoppingBag, {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 25\n                }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                  children: cart.items.length > 0 ? cart.items.map(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_4__.quantity).reduce(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_4__.sum) : 0\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 23\n              }, _this) : null\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 8\n  }, _this);\n};\n\n_s(NavBar, \"T6LbLtO1ptXTOqPLiS8/2AxHbP0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURMO0FBZ0NELENBL0NNOztHQUFNQztVQUtJWjs7O0tBTEpZO0FBaURiLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L25hdi1iYXIuanN4P2RlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmlTaG9wcGluZ0JhZyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IERpc3BsYXlDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2Rpc3BsYXktY29udGV4dFwiO1xuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9zdG9yZS1jb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvbmF2LWJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgYWJvdXRfc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9sYW5kaW5nLXBhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgcXVhbnRpdHksIHN1bSB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXItZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXBkYXRlQ2FydFZpZXdEaXNwbGF5IH0gPSB1c2VDb250ZXh0KERpc3BsYXlDb250ZXh0KTtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XG4gIGNvbnN0IFtpc0NoZWNrb3V0LCBzZXRJc0NoZWNrb3V0XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY2hlY2tvdXRcIiB8fCByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3BheW1lbnRcIikge1xuICAgICAgc2V0SXNDaGVja291dCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNDaGVja291dChmYWxzZSk7XG4gICAgfVxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm5hdi1iYXIgc3RpY2t5LXRvcFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3M9e2Ake3N0eWxlcy5uYXZiYXJ9IG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8aDU+PGEgY2xhc3M9XCJuYXZiYXItYnJhbmQgbXgtNCB0ZXh0LXdoaXRlXCIgaHJlZj1cIi9cIj5Cb29rU3RvcmU8L2E+PC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gPjxpIGNsYXNzPVwiZmFzIGZhLWJhcnNcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPXtgJHtzdHlsZXMubmF2YmFyfSBuYXZiYXItbmF2IG1zLWF1dG8gbXgtNGB9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPXtgJHtzdHlsZXMuYnRufSB0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz17YCR7c3R5bGVzLm5hdl9saW5rfSB0ZXh0LXdoaXRlYH0gaHJlZj17YCMke2Fib3V0X3N0eWxlLmFib3V0dXN9YH0+QUJPVVQgVVM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyFpc0NoZWNrb3V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ0bn0gJHtzdHlsZXMubmF2X2xpbmt9IHRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQ2FydFZpZXdEaXNwbGF5KCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJpU2hvcHBpbmdCYWcgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnQuaXRlbXMubGVuZ3RoID4gMCA/IGNhcnQuaXRlbXMubWFwKHF1YW50aXR5KS5yZWR1Y2Uoc3VtKSA6IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCaVNob3BwaW5nQmFnIiwiRGlzcGxheUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJzdHlsZXMiLCJhYm91dF9zdHlsZSIsInF1YW50aXR5Iiwic3VtIiwiTmF2QmFyIiwidXBkYXRlQ2FydFZpZXdEaXNwbGF5IiwiY2FydCIsImlzQ2hlY2tvdXQiLCJzZXRJc0NoZWNrb3V0Iiwicm91dGVyIiwicGF0aG5hbWUiLCJuYXZiYXIiLCJidG4iLCJuYXZfbGluayIsImFib3V0dXMiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsInJlZHVjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/nav-bar.jsx\n");

/***/ })

});