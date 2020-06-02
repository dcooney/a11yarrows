let keycodes = require("./keycodes");
let getIndex = require("./getIndex");
let isSelector = require("./isSelector");
let keycodeArray = require("./keycodeArray");

/**
 * Dispatch run on window eventlistener
 *
 * @param {*} e
 * @param {*} options
 */
let dispatch = (e, options) => {
	let el = e.target; // Current target focus
	let keycode = e.which || e.keycode; // Current keycode

	// Get all selectors
	let selectors = options.target.querySelectorAll(options.selector);

	// Convert NodeList to array (IE fix)
	selectors = selectors ? Array.prototype.slice.call(selectors) : selectors;

	let is_selector = isSelector(el, selectors);

	if (!selectors || !is_selector) {
		// Exit if NOT is_selector
		return false;
	}

	// Next
	let nextCodes = keycodeArray(options.next, keycodes);
	if (nextCodes.indexOf(keycode) !== -1) {
		let index = getIndex(el, selectors, "next");
		if (index < selectors.length) {
			selectors[index].focus();
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else {
			// Go to first selector
			if (options.loop) {
				selectors[0].focus();
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		}
	}

	// Previous
	let prevCodes = keycodeArray(options.prev, keycodes);
	if (prevCodes.indexOf(keycode) !== -1) {
		let index = getIndex(el, selectors, "previous");
		if (index < selectors.length && index !== -1) {
			selectors[index].focus();
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else {
			// Go to last selector
			if (options.loop) {
				selectors[selectors.length - 1].focus();
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		}
	}

	return true;
};
module.exports = dispatch;
