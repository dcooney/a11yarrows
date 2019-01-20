var index =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../index.js */ "./index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = document.querySelector('#list');
if (list) {
	var arrows = new _index2.default(list, {
		// options
		selector: 'li',
		hasParent: false,
		start: '#meow',
		end: '#meowEnd'
	});
}
// let list2 = document.querySelector('#list2');
// if(list2){
// 	var arrows = new a11yarrows(list2, {
// 		// options
// 		selector: 'li',
// 		hasParent: false,
// 		start: '#meow',
// 		end: '#meowEnd'
// 	});
// }

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./src/index */ "./src/index.js");

/***/ }),

/***/ "./src/a11yarrows.js":
/*!***************************!*\
  !*** ./src/a11yarrows.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defaults = __webpack_require__(/*! ./modules/defaults */ "./src/modules/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

var _dispatch = __webpack_require__(/*! ./modules/dispatch */ "./src/modules/dispatch.js");

var _dispatch2 = _interopRequireDefault(_dispatch);

var _tabindex = __webpack_require__(/*! ./modules/tabindex */ "./src/modules/tabindex.js");

var _tabindex2 = _interopRequireDefault(_tabindex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * a11yarrows creates event listeners for arrow keys
 * @param {*} target
 * @param {*} options
 */
var a11yarrows = function a11yarrows(target, options) {

	// Set options
	options = Object.assign({}, _defaults2.default, options);
	options.target = target;
	options.next = options.next ? options.next : 'down';
	options.prev = options.prev ? options.prev : 'up';

	//console.log(options);

	// Exit if target and selector are not set
	if (!options.target || !options.selector) return;

	// Set tabindex on elements so they can be focused
	(0, _tabindex2.default)(options.target, options.selector, options.start, options.end);

	// Add event listener to selectors
	window.addEventListener(options.event, function (e) {
		(0, _dispatch2.default)(e, options);
	});
};
exports.default = a11yarrows;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a11yarrows = __webpack_require__(/*! ./a11yarrows */ "./src/a11yarrows.js");

var _a11yarrows2 = _interopRequireDefault(_a11yarrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _a11yarrows2.default;

/***/ }),

/***/ "./src/modules/defaults.js":
/*!*********************************!*\
  !*** ./src/modules/defaults.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	selector: 'a',
	hasParent: false,
	start: '',
	end: '',
	event: 'keydown',
	next: 'down',
	prev: 'up'
};

/***/ }),

/***/ "./src/modules/dispatch.js":
/*!*********************************!*\
  !*** ./src/modules/dispatch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keycodes = __webpack_require__(/*! ./keycodes */ "./src/modules/keycodes.js");

var _keycodes2 = _interopRequireDefault(_keycodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dispatch run on window eventlistener
 *
 * @param {*} e
 * @param {*} options
 */
var dispatch = function dispatch(e, options) {

	var keycode = e.which || e.keycode; // Current keycode
	var el = e.target; // Current target focus

	// Next
	if (keycode === _keycodes2.default[options.next]) {

		// Goto first element
		if (options.start && el === document.querySelector(options.start)) {
			var first = options.target.querySelector(options.selector + ':first-child');
			if (first) {
				first.focus();
				return false;
			}
		}

		var next = options.hasParent ? el.parentNode.nextElementSibling : el.nextElementSibling;
		if (next) {
			// If exists
			if (options.hasParent) {
				next.querySelector(options.selector).focus();
				e.preventDefault();
				return false;
			} else {
				next.focus();
				return false;
			}
		} else {
			if (!options.end) {
				return false;
			}
			var end = document.querySelector(options.end);
			if (end && end !== el) {
				end.focus();
				return false;
			}
		}
	}

	// Previous
	if (keycode === _keycodes2.default[options.prev]) {

		// Goto last element
		if (options.end && el === document.querySelector(options.end)) {
			var last = options.target.querySelector(options.selector + ':last-child');
			if (last) {
				last.focus();
				return false;
			}
		}

		var prev = options.hasParent ? el.parentNode.previousElementSibling : el.previousElementSibling;
		if (prev) {
			// If exists
			if (options.hasParent) {
				prev.querySelector(options.selector).focus();
				return false;
			} else {
				prev.focus();
				return false;
			}
		} else {
			if (!options.start) {
				return false;
			}
			var start = document.querySelector(options.start);
			if (start && start !== el) {
				start.focus();
				return false;
			}
		}
	}

	return true;
};
exports.default = dispatch;

/***/ }),

/***/ "./src/modules/keycodes.js":
/*!*********************************!*\
  !*** ./src/modules/keycodes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	up: 38,
	right: 39,
	down: 40,
	left: 37,
	escape: 27,
	enter: 13,
	tab: 9
};

/***/ }),

/***/ "./src/modules/tabindex.js":
/*!*********************************!*\
  !*** ./src/modules/tabindex.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 *
 * @param {*} target
 * @param {*} selector
 * @param {*} start
 * @param {*} end
 */
var setTabIndex = function setTabIndex(target, selector) {
	var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';


	// Get selectors
	var elements = target.querySelectorAll(selector);
	if (!elements) {
		return false;
	}

	// Loop all selectors
	elements.forEach(function (element) {
		element.tabIndex = 0;
	});

	// Start selector
	if (start && document.querySelector(start)) {
		document.querySelector(start).tabIndex = 0;
	}

	// End selector
	if (document.querySelector(end)) {
		document.querySelector(end).tabIndex = 0;
	}
};
exports.default = setTabIndex;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map