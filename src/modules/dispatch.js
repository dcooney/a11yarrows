import keycodes from './keycodes';

/**
 * Dispatch run on window eventlistener
 *
 * @param {*} e
 * @param {*} options
 */
let dispatch = (e, options) => {

	let keycode = e.which || e.keycode; // Current keycode
	let el = e.target; // Current target focus

	// Next
	if(keycode === keycodes[options.next]){

		// Goto first element
		if(options.start && el === document.querySelector(options.start)){
			let first = options.target.querySelector(`${options.selector}:first-child`);
			if(first){
				first.focus();
				return false;
			}
		}

		let next = (options.hasParent) ? el.parentNode.nextElementSibling : el.nextElementSibling;
		if(next){ // If exists
			if(options.hasParent){
				next.querySelector(options.selector).focus();
				e.preventDefault();
				return false;
			} else {
				next.focus();
				return false;
			}
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
	}

	// Previous
	if(keycode === keycodes[options.prev]){

		// Goto last element
		if(options.end && el === document.querySelector(options.end)){
			let last = options.target.querySelector(`${options.selector}:last-child`);
			if(last){
				last.focus();
				return false;
			}
		}

		let prev = (options.hasParent) ? el.parentNode.previousElementSibling : el.previousElementSibling;
		if(prev){ // If exists
			if(options.hasParent){
				prev.querySelector(options.selector).focus();
				return false;
			} else {
				prev.focus();
				return false;
			}
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
export default dispatch;
