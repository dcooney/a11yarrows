let keycodes = require('./keycodes');
let getIndex = require('./getIndex');
let isSelector = require('./isSelector');

/**
 * Dispatch run on window eventlistener
 *
 * @param {*} e
 * @param {*} options
 * @param {*} selectors
 */
let dispatch = (e, options, selectors) => {

	let el = e.target; // Current target focus
	let keycode = e.which || e.keycode; // Current keycode

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
		}
	}

	// Previous
	if(keycode === keycodes[options.prev]){

		let index = getIndex(el, selectors, 'previous');
		if(index < selectors.length && index !== -1){
			selectors[index].focus();
			return false;

		}

	}

	return true;

}
module.exports = dispatch;
