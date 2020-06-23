let defaults = require("./modules/defaults");
let dispatch = require("./modules/dispatch");
let setTabIndex = require("./modules/tabindex");
require("./modules/polyfills");

/**
 * a11yarrows creates event listeners for arrow keys
 * @param {*} target
 * @param {*} options
 */
export function init(target, options) {
	// Set options
	options = Object.assign({}, defaults, options);
	options.target = target;
	options.next = options.next ? options.next : "down";
	options.prev = options.prev ? options.prev : "up";

	// Exit if target and selector are not set
	if (!options.target || !options.selector) return;

	// Set tabindex on selectors so they can be focused
	setTabIndex(options);

	// Add event listener to selectors
	window.addEventListener(options.event, function (e) {
		dispatch(e, options);
	});
}
