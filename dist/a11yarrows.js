var a11yarrows =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./src/index */ \"./src/index.js\");\n\n//# sourceURL=webpack://%5Bname%5D/./index.js?");

/***/ }),

/***/ "./src/a11yarrows.js":
/*!***************************!*\
  !*** ./src/a11yarrows.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _defaults = __webpack_require__(/*! ./modules/defaults */ \"./src/modules/defaults.js\");\n\nvar _defaults2 = _interopRequireDefault(_defaults);\n\nvar _dispatch = __webpack_require__(/*! ./modules/dispatch */ \"./src/modules/dispatch.js\");\n\nvar _dispatch2 = _interopRequireDefault(_dispatch);\n\nvar _tabindex = __webpack_require__(/*! ./modules/tabindex */ \"./src/modules/tabindex.js\");\n\nvar _tabindex2 = _interopRequireDefault(_tabindex);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * a11yarrows creates event listeners for arrow keys\n * @param {*} target\n * @param {*} options\n */\nvar a11yarrows = function a11yarrows(target, options) {\n\n\t// Set options\n\toptions = Object.assign({}, _defaults2.default, options);\n\toptions.target = target;\n\toptions.next = options.next ? options.next : 'down';\n\toptions.prev = options.prev ? options.prev : 'up';\n\n\t//console.log(options);\n\n\t// Exit if target and selector are not set\n\tif (!options.target || !options.selector) return;\n\n\t// Set tabindex on elements so they can be focused\n\t(0, _tabindex2.default)(options.target, options.selector, options.start, options.end);\n\n\t// Add event listener to selectors\n\twindow.addEventListener(options.event, function (e) {\n\t\t(0, _dispatch2.default)(e, options);\n\t});\n};\nmodule.exports = a11yarrows;\n\n//# sourceURL=webpack://%5Bname%5D/./src/a11yarrows.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _a11yarrows = __webpack_require__(/*! ./a11yarrows */ \"./src/a11yarrows.js\");\n\nvar _a11yarrows2 = _interopRequireDefault(_a11yarrows);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = _a11yarrows2.default;\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = _a11yarrows2.default;\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/modules/defaults.js":
/*!*********************************!*\
  !*** ./src/modules/defaults.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tselector: 'a',\n\thasParent: false,\n\tstart: '',\n\tend: '',\n\tevent: 'keydown',\n\tnext: 'down',\n\tprev: 'up'\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/defaults.js?");

/***/ }),

/***/ "./src/modules/dispatch.js":
/*!*********************************!*\
  !*** ./src/modules/dispatch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _keycodes = __webpack_require__(/*! ./keycodes */ \"./src/modules/keycodes.js\");\n\nvar _keycodes2 = _interopRequireDefault(_keycodes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Dispatch run on window eventlistener\n *\n * @param {*} e\n * @param {*} options\n */\nvar dispatch = function dispatch(e, options) {\n\n\tvar keycode = e.which || e.keycode; // Current keycode\n\tvar el = e.target; // Current target focus\n\n\t// Next\n\tif (keycode === _keycodes2.default[options.next]) {\n\n\t\t// Goto first element\n\t\tif (options.start && el === document.querySelector(options.start)) {\n\t\t\tvar first = options.target.querySelector(options.selector + ':first-child');\n\t\t\tif (first) {\n\t\t\t\tfirst.focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\tvar next = options.hasParent ? el.parentNode.nextElementSibling : el.nextElementSibling;\n\t\tif (next) {\n\t\t\t// If exists\n\t\t\tif (options.hasParent) {\n\t\t\t\tnext.querySelector(options.selector).focus();\n\t\t\t\te.preventDefault();\n\t\t\t\treturn false;\n\t\t\t} else {\n\t\t\t\tnext.focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} else {\n\t\t\tif (!options.end) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tvar end = document.querySelector(options.end);\n\t\t\tif (end && end !== el) {\n\t\t\t\tend.focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\t// Previous\n\tif (keycode === _keycodes2.default[options.prev]) {\n\n\t\t// Goto last element\n\t\tif (options.end && el === document.querySelector(options.end)) {\n\t\t\tvar last = options.target.querySelector(options.selector + ':last-child');\n\t\t\tif (last) {\n\t\t\t\tlast.focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\tvar prev = options.hasParent ? el.parentNode.previousElementSibling : el.previousElementSibling;\n\t\tif (prev) {\n\t\t\t// If exists\n\t\t\tif (options.hasParent) {\n\t\t\t\tprev.querySelector(options.selector).focus();\n\t\t\t\treturn false;\n\t\t\t} else {\n\t\t\t\tprev.focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} else {\n\t\t\tif (!options.start) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tvar start = document.querySelector(options.start);\n\t\t\tif (start && start !== el) {\n\t\t\t\tstart.focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\treturn true;\n};\nmodule.exports = dispatch;\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/dispatch.js?");

/***/ }),

/***/ "./src/modules/keycodes.js":
/*!*********************************!*\
  !*** ./src/modules/keycodes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tup: 38,\n\tright: 39,\n\tdown: 40,\n\tleft: 37,\n\tescape: 27,\n\tenter: 13,\n\ttab: 9\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/keycodes.js?");

/***/ }),

/***/ "./src/modules/tabindex.js":
/*!*********************************!*\
  !*** ./src/modules/tabindex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n *\n * @param {*} target\n * @param {*} selector\n * @param {*} start\n * @param {*} end\n */\nvar setTabIndex = function setTabIndex(target, selector) {\n\tvar start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\tvar end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n\n\n\t// Get selectors\n\tvar elements = target.querySelectorAll(selector);\n\tif (!elements) {\n\t\treturn false;\n\t}\n\n\t// Loop all selectors\n\telements.forEach(function (element) {\n\t\telement.tabIndex = 0;\n\t});\n\n\t// Start selector\n\tif (start && document.querySelector(start)) {\n\t\tdocument.querySelector(start).tabIndex = 0;\n\t}\n\n\t// End selector\n\tif (document.querySelector(end)) {\n\t\tdocument.querySelector(end).tabIndex = 0;\n\t}\n};\nmodule.exports = setTabIndex;\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/tabindex.js?");

/***/ })

/******/ });