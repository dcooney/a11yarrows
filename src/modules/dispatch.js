let keycodes = require('./keycodes');
let getIndex = require('./getIndex');
let isSelector = require('./isSelector');

/**
 * Dispatch run on window eventlistener
 *
 * @param {*} e
 * @param {*} options
 */
let dispatch = (e, options) => {

	let el = e.target; // Current target focus
	let keycode = e.which || e.keycode; // Current keycode

	console.log(el);

	// Get all selectors
	let selectors = options.target.querySelectorAll(options.selector);

	// Convert NodeList to array (IE fix)
	selectors = (selectors) ? Array.prototype.slice.call(selectors) : selectors;

	let is_selector = isSelector(el, selectors);

	if(!selectors || !is_selector){ // Exit if NOT is_selector
		return false;
	}

	// Next
	if(keycode === keycodes[options.next]){

		let index = getIndex(el, selectors, 'next');
		if(index < selectors.length){
			selectors[index].focus();
			return false;
		} else {
			// Go to first selector
			if(options.loop){
				selectors[0].focus();
				return false;
			}
		}

	}

	// Previous
	if(keycode === keycodes[options.prev]){

		let index = getIndex(el, selectors, 'previous');
		if(index < selectors.length && index !== -1){
			selectors[index].focus();
			return false;
		} else {
			// Go to last selector
			if(options.loop){
				selectors[selectors.length-1].focus();
				return false;
			}
		}

	}

	return true;

}
module.exports = dispatch;
