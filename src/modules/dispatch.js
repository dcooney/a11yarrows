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

	let is_selector = isSelector(el, selectors, options);

	if(!selectors || !is_selector){ // Exit if NOT is_selector
		return false;
	}

	// Next
	if(keycode === keycodes[options.next]){

		// Go to first element
		if(options.start && el === document.querySelector(options.start)){
			let first = selectors[0];
			if(first){
				first.focus();
				return false;
			}
		}

		let index = getIndex(el, selectors, 'next');
		if(index < selectors.length){
			selectors[index].focus();
			return false;
		} else {

			if(!options.end){
				return false;
			}
			let end = document.querySelector(options.end);
			if(end && end !== el){
				end.focus();
				return false;
			}
		}

		// if(next){ // If exists
		// 	if(options.hasParent){
		// 		next.querySelector(options.selector).focus();
		// 		return false;
		// 	} else {
		// 		next.focus();
		// 		return false;
		// 	}
		// } else {
		// 	if(!options.end){
		// 		return false;
		// 	}
		// 	let end = document.querySelector(options.end);
		// 	if(end && end !== el){
		// 		end.focus();
		// 		return false;
		// 	}
		// }
	}

	// Previous
	if(keycode === keycodes[options.prev]){

		// Go to last element
		if(options.end && el === document.querySelector(options.end)){
			let last = selectors[selectors.length-1];
			if(last){
				last.focus();
				return false;
			}
		}

		let index = getIndex(el, selectors, 'previous');
		if(index < selectors.length && index !== -1){
			selectors[index].focus();
			return false;

		} else {

			if(!options.start){
				return false;
			}
			let start = document.querySelector(options.start);
			if(start && start !== el){
				start.focus();
				return false;
			}
		}

	}

	return true;

}
module.exports = dispatch;
