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
eval("\n\nvar defaults = __webpack_require__(/*! ./modules/defaults */ \"./src/modules/defaults.js\");\nvar dispatch = __webpack_require__(/*! ./modules/dispatch */ \"./src/modules/dispatch.js\");\nvar setTabIndex = __webpack_require__(/*! ./modules/tabindex */ \"./src/modules/tabindex.js\");\n__webpack_require__(/*! ./modules/polyfills */ \"./src/modules/polyfills.js\");\n\n/**\n * a11yarrows creates event listeners for arrow keys\n * @param {*} target\n * @param {*} options\n */\nvar a11yarrows = function a11yarrows(target, options) {\n\n\t// Set options\n\toptions = Object.assign({}, defaults, options);\n\toptions.target = target;\n\toptions.next = options.next ? options.next : 'down';\n\toptions.prev = options.prev ? options.prev : 'up';\n\n\t// Exit if target and selector are not set\n\tif (!options.target || !options.selector) return;\n\n\t// Set tabindex on selectors so they can be focused\n\tsetTabIndex(options);\n\n\t// Add event listener to selectors\n\twindow.addEventListener(options.event, function (e) {\n\t\tdispatch(e, options);\n\t});\n};\nmodule.exports = a11yarrows;\n\n//# sourceURL=webpack://a11yarrows/./src/a11yarrows.js?");

/***/ }),

/***/ "./src/modules/defaults.js":
/*!*********************************!*\
  !*** ./src/modules/defaults.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tselector: 'a',\n\tloop: true,\n\tevent: 'keydown',\n\tnext: 'down',\n\tprev: 'up'\n};\n\n//# sourceURL=webpack://a11yarrows/./src/modules/defaults.js?");

/***/ }),

/***/ "./src/modules/dispatch.js":
/*!*********************************!*\
  !*** ./src/modules/dispatch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keycodes = __webpack_require__(/*! ./keycodes */ \"./src/modules/keycodes.js\");\nvar getIndex = __webpack_require__(/*! ./getIndex */ \"./src/modules/getIndex.js\");\nvar isSelector = __webpack_require__(/*! ./isSelector */ \"./src/modules/isSelector.js\");\n\n/**\n * Dispatch run on window eventlistener\n *\n * @param {*} e\n * @param {*} options\n */\nvar dispatch = function dispatch(e, options) {\n\n\tvar el = e.target; // Current target focus\n\tvar keycode = e.which || e.keycode; // Current keycode\n\n\t// Get all selectors\n\tvar selectors = options.target.querySelectorAll(options.selector);\n\n\t// Convert NodeList to array (IE fix)\n\tselectors = selectors ? Array.prototype.slice.call(selectors) : selectors;\n\n\tvar is_selector = isSelector(el, selectors);\n\n\tif (!selectors || !is_selector) {\n\t\t// Exit if NOT is_selector\n\t\treturn false;\n\t}\n\n\t// Next\n\tif (keycode === keycodes[options.next]) {\n\n\t\tvar index = getIndex(el, selectors, 'next');\n\t\tif (index < selectors.length) {\n\t\t\tselectors[index].focus();\n\t\t\treturn false;\n\t\t} else {\n\t\t\t// Go to first selector\n\t\t\tif (options.loop) {\n\t\t\t\tselectors[0].focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\t// Previous\n\tif (keycode === keycodes[options.prev]) {\n\n\t\tvar _index = getIndex(el, selectors, 'previous');\n\t\tif (_index < selectors.length && _index !== -1) {\n\t\t\tselectors[_index].focus();\n\t\t\treturn false;\n\t\t} else {\n\t\t\t// Go to last selector\n\t\t\tif (options.loop) {\n\t\t\t\tselectors[selectors.length - 1].focus();\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\treturn true;\n};\nmodule.exports = dispatch;\n\n//# sourceURL=webpack://a11yarrows/./src/modules/dispatch.js?");

/***/ }),

/***/ "./src/modules/getIndex.js":
/*!*********************************!*\
  !*** ./src/modules/getIndex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Get the index of the current focused item\n * @param {*} el\n * @param {*} nodelist\n * @param {*} direction\n */\nvar getIndex = function getIndex(el, nodelist) {\n  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'next';\n\n  var array = Array.prototype.slice.call(nodelist); // Now it's an Array.\n  var pos = array.indexOf(el);\n  if (pos !== -1) {\n    return direction === 'previous' ? pos - 1 : pos + 1;\n  }\n};\nmodule.exports = getIndex;\n\n//# sourceURL=webpack://a11yarrows/./src/modules/getIndex.js?");

/***/ }),

/***/ "./src/modules/isSelector.js":
/*!***********************************!*\
  !*** ./src/modules/isSelector.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Loop over selectors to determine if the current focused element is in array\n * @param {*} el\n * @param {*} nodelist\n * @param {*} options\n */\nvar isSelector = function isSelector(el, nodelist) {\n  var array = Array.prototype.slice.call(nodelist); // Now it's an Array.\n  var pos = array.indexOf(el);\n  return pos === -1 ? false : true;\n};\nmodule.exports = isSelector;\n\n//# sourceURL=webpack://a11yarrows/./src/modules/isSelector.js?");

/***/ }),

/***/ "./src/modules/keycodes.js":
/*!*********************************!*\
  !*** ./src/modules/keycodes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tup: 38,\n\tright: 39,\n\tdown: 40,\n\tleft: 37,\n\tescape: 27,\n\tenter: 13,\n\tspacebar: 32,\n\ttab: 9\n};\n\n//# sourceURL=webpack://a11yarrows/./src/modules/keycodes.js?");

/***/ }),

/***/ "./src/modules/polyfills.js":
/*!**********************************!*\
  !*** ./src/modules/polyfills.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Object Assign\nif (typeof Object.assign != 'function') {\n\t// Must be writable: true, enumerable: false, configurable: true\n\tObject.defineProperty(Object, \"assign\", {\n\t\tvalue: function assign(target, varArgs) {\n\t\t\t// .length of function is 2\n\t\t\t'use strict';\n\n\t\t\tif (target == null) {\n\t\t\t\t// TypeError if undefined or null\n\t\t\t\tthrow new TypeError('Cannot convert undefined or null to object');\n\t\t\t}\n\n\t\t\tvar to = Object(target);\n\n\t\t\tfor (var index = 1; index < arguments.length; index++) {\n\t\t\t\tvar nextSource = arguments[index];\n\n\t\t\t\tif (nextSource != null) {\n\t\t\t\t\t// Skip over if undefined or null\n\t\t\t\t\tfor (var nextKey in nextSource) {\n\t\t\t\t\t\t// Avoid bugs when hasOwnProperty is shadowed\n\t\t\t\t\t\tif (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\n\t\t\t\t\t\t\tto[nextKey] = nextSource[nextKey];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn to;\n\t\t},\n\t\twritable: true,\n\t\tconfigurable: true\n\t});\n}\n\n// Production steps of ECMA-262, Edition 5, 15.4.4.18\n// Reference: http://es5.github.io/#x15.4.4.18\nif (!Array.prototype.forEach) {\n\n\tArray.prototype.forEach = function (callback /*, thisArg*/) {\n\n\t\tvar T, k;\n\n\t\tif (this == null) {\n\t\t\tthrow new TypeError('this is null or not defined');\n\t\t}\n\n\t\t// 1. Let O be the result of calling toObject() passing the\n\t\t// |this| value as the argument.\n\t\tvar O = Object(this);\n\n\t\t// 2. Let lenValue be the result of calling the Get() internal\n\t\t// method of O with the argument \"length\".\n\t\t// 3. Let len be toUint32(lenValue).\n\t\tvar len = O.length >>> 0;\n\n\t\t// 4. If isCallable(callback) is false, throw a TypeError exception.\n\t\t// See: http://es5.github.com/#x9.11\n\t\tif (typeof callback !== 'function') {\n\t\t\tthrow new TypeError(callback + ' is not a function');\n\t\t}\n\n\t\t// 5. If thisArg was supplied, let T be thisArg; else let\n\t\t// T be undefined.\n\t\tif (arguments.length > 1) {\n\t\t\tT = arguments[1];\n\t\t}\n\n\t\t// 6. Let k be 0.\n\t\tk = 0;\n\n\t\t// 7. Repeat while k < len.\n\t\twhile (k < len) {\n\n\t\t\tvar kValue;\n\n\t\t\t// a. Let Pk be ToString(k).\n\t\t\t//    This is implicit for LHS operands of the in operator.\n\t\t\t// b. Let kPresent be the result of calling the HasProperty\n\t\t\t//    internal method of O with argument Pk.\n\t\t\t//    This step can be combined with c.\n\t\t\t// c. If kPresent is true, then\n\t\t\tif (k in O) {\n\n\t\t\t\t// i. Let kValue be the result of calling the Get internal\n\t\t\t\t// method of O with argument Pk.\n\t\t\t\tkValue = O[k];\n\n\t\t\t\t// ii. Call the Call internal method of callback with T as\n\t\t\t\t// the this value and argument list containing kValue, k, and O.\n\t\t\t\tcallback.call(T, kValue, k, O);\n\t\t\t}\n\t\t\t// d. Increase k by 1.\n\t\t\tk++;\n\t\t}\n\t\t// 8. return undefined.\n\t};\n}\n\n//# sourceURL=webpack://a11yarrows/./src/modules/polyfills.js?");

/***/ }),

/***/ "./src/modules/tabindex.js":
/*!*********************************!*\
  !*** ./src/modules/tabindex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n *\n * @param {*} options\n */\nvar setTabIndex = function setTabIndex() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n\n\t// Get selectors\n\tif (!options.target || !options.selector) {\n\t\treturn false;\n\t}\n\n\t// Get all selectors\n\tvar selectors = options.target.querySelectorAll(options.selector);\n\n\t// Convert NodeList to array (IE fix)\n\tselectors = selectors ? Array.prototype.slice.call(selectors) : selectors;\n\n\t// Loop all selectors\n\tselectors.forEach(function (selector) {\n\t\tselector.tabIndex = 0;\n\t});\n};\nmodule.exports = setTabIndex;\n\n//# sourceURL=webpack://a11yarrows/./src/modules/tabindex.js?");

/***/ })

/******/ });