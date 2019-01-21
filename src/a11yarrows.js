let defaults = require('./modules/defaults');
let dispatch = require('./modules/dispatch');
let setTabIndex = require('./modules/tabindex');

/**
 * a11yarrows creates event listeners for arrow keys
 * @param {*} target
 * @param {*} options
 */
let a11yarrows = (target, options) => {

	// Set options
	options = Object.assign({}, defaults, options);
	options.target = target;
	options.next = (options.next) ? options.next : 'down';
	options.prev = (options.prev) ? options.prev : 'up';

	// Get all selectors
	let selectors = target.querySelectorAll(options.selector)

	// Exit if target and selector are not set
	if(!options.target || !selectors) return;

	// Set tabindex on selectors so they can be focused
	setTabIndex(selectors, options.start, options.end);

	// Add event listener to selectors
	window.addEventListener(options.event, function(e){
		dispatch(e, options, selectors);
	});

}
module.exports = a11yarrows;
