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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/a11yarrows.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/a11yarrows.js":
/*!***************************!*\
  !*** ./src/a11yarrows.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar defaults = __webpack_require__(/*! ./modules/defaults */ \"./src/modules/defaults.js\");\nvar dispatch = __webpack_require__(/*! ./modules/dispatch */ \"./src/modules/dispatch.js\");\nvar setTabIndex = __webpack_require__(/*! ./modules/tabindex */ \"./src/modules/tabindex.js\");\n\n/**\n * a11yarrows creates event listeners for arrow keys\n * @param {*} target\n * @param {*} options\n */\nvar a11yarrows = function a11yarrows(target, options) {\n\n\t// Set options\n\toptions = Object.assign({}, defaults, options);\n\toptions.target = target;\n\toptions.next = options.next ? options.next : 'down';\n\toptions.prev = options.prev ? options.prev : 'up';\n\n\t// Get all selectors\n\tvar selectors = target.querySelectorAll(options.selector);\n\n\t// Exit if target and selector are not set\n\tif (!options.target || !selectors) return;\n\n\t// Set tabindex on selectors so they can be focused\n\tsetTabIndex(selectors);\n\n\t// Add event listener to selectors\n\twindow.addEventListener(options.event, function (e) {\n\t\tdispatch(e, options, selectors);\n\t});\n};\nmodule.exports = a11yarrows;\n\n//# sourceURL=webpack://%5Bname%5D/./src/a11yarrows.js?");

/***/ }),

/***/ "./src/modules/defaults.js":
/*!*********************************!*\
  !*** ./src/modules/defaults.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tselector: 'a',\n\tevent: 'keydown',\n\tnext: 'down',\n\tprev: 'up'\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/defaults.js?");

/***/ }),

/***/ "./src/modules/dispatch.js":
/*!*********************************!*\
  !*** ./src/modules/dispatch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keycodes = __webpack_require__(/*! ./keycodes */ \"./src/modules/keycodes.js\");\nvar getIndex = __webpack_require__(/*! ./getIndex */ \"./src/modules/getIndex.js\");\nvar isSelector = __webpack_require__(/*! ./isSelector */ \"./src/modules/isSelector.js\");\n\n/**\n * Dispatch run on window eventlistener\n *\n * @param {*} e\n * @param {*} options\n * @param {*} selectors\n */\nvar dispatch = function dispatch(e, options, selectors) {\n\n\tvar el = e.target; // Current target focus\n\tvar keycode = e.which || e.keycode; // Current keycode\n\n\tvar is_selector = isSelector(el, selectors);\n\n\tif (!selectors || !is_selector) {\n\t\t// Exit if NOT is_selector\n\t\treturn false;\n\t}\n\n\t// Next\n\tif (keycode === keycodes[options.next]) {\n\n\t\tvar index = getIndex(el, selectors, 'next');\n\t\tif (index < selectors.length) {\n\t\t\tselectors[index].focus();\n\t\t\treturn false;\n\t\t}\n\t}\n\n\t// Previous\n\tif (keycode === keycodes[options.prev]) {\n\n\t\tvar _index = getIndex(el, selectors, 'previous');\n\t\tif (_index < selectors.length && _index !== -1) {\n\t\t\tselectors[_index].focus();\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn true;\n};\nmodule.exports = dispatch;\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/dispatch.js?");

/***/ }),

/***/ "./src/modules/getIndex.js":
/*!*********************************!*\
  !*** ./src/modules/getIndex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Get the index of the current focused item\n * @param {*} el\n * @param {*} nodelist\n * @param {*} direction\n */\nvar getIndex = function getIndex(el, nodelist) {\n  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'next';\n\n  var array = Array.prototype.slice.call(nodelist); // Now it's an Array.\n  var pos = array.indexOf(el);\n  if (pos !== -1) {\n    return direction === 'previous' ? pos - 1 : pos + 1;\n  }\n};\nmodule.exports = getIndex;\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/getIndex.js?");

/***/ }),

/***/ "./src/modules/isSelector.js":
/*!***********************************!*\
  !*** ./src/modules/isSelector.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Loop over selectors to determine if the current focused element is in array\n * @param {*} el\n * @param {*} nodelist\n * @param {*} options\n */\nvar isSelector = function isSelector(el, nodelist) {\n  var array = Array.prototype.slice.call(nodelist); // Now it's an Array.\n  var pos = array.indexOf(el);\n  return pos === -1 ? false : true;\n};\nmodule.exports = isSelector;\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/isSelector.js?");

/***/ }),

/***/ "./src/modules/keycodes.js":
/*!*********************************!*\
  !*** ./src/modules/keycodes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tup: 38,\n\tright: 39,\n\tdown: 40,\n\tleft: 37,\n\tescape: 27,\n\tenter: 13,\n\tspacebar: 32,\n\ttab: 9\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/keycodes.js?");

/***/ }),

/***/ "./src/modules/tabindex.js":
/*!*********************************!*\
  !*** ./src/modules/tabindex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n *\n * @param {*} selectors\n */\nvar setTabIndex = function setTabIndex() {\n\tvar selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n\n\t// Get selectors\n\tif (!selectors) {\n\t\treturn false;\n\t}\n\n\t// Loop all selectors\n\tselectors.forEach(function (selector) {\n\t\tselector.tabIndex = 0;\n\t});\n};\nmodule.exports = setTabIndex;\n\n//# sourceURL=webpack://%5Bname%5D/./src/modules/tabindex.js?");

/***/ })

/******/ });