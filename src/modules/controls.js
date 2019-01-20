import helpers from './helpers';

/*
 * arrowControls
 * Set the input form values
 *
 * @param e         element   Current focused element
 * @param target    tring     The target element to compare focus
 * @param selector  string    The type of element selector
 * @param hasParent boolen    Does the selector have a parent element
 * @param start     element   What gets previous focus when at the start of the list
 * @param end       element   What gets next focus when at the end of the list
 * @return null
 */

let controls = (e, target = '', selector = 'a', hasParent = true, start = null, end = null) => {

	if(!target) return;

	let keycode = e.which; // Current keycode
	let el = e.target; // Current target focus

	// Down
	if(keycode == helpers.keycode.down){

		let next = (hasParent) ? el.parentNode.nextElementSibling : el.nextElementSibling;
		if(next){ // If exists
			if(hasParent){
				next.querySelector(selector).focus();
				e.preventDefault();
				return false;
			} else {
				next.focus();
				e.preventDefault();
				return false;
			}
		} else {
			if(!end){
				return false;
			}
			let startElement = document.querySelector(end);
			if(startElement){
				startElement.focus();
				e.preventDefault();
				return false;
			}
		}
	}

	// Up
	if(keycode == helpers.keycode.up){

		let prev = (hasParent) ? el.parentNode.previousElementSibling : el.previousElementSibling;

		if(prev){ // If exists
			if(hasParent){
				prev.querySelector(selector).focus();
				e.preventDefault();
				return false;
			} else {
				prev.focus();
				e.preventDefault();
				return false;
			}
		} else {
			if(!start){
				return false;
			}
			let startElement = document.querySelector(start);
			if(startElement){
				startElement.focus();
				e.preventDefault();
				return false;
			}
		}
	}
	return true;
}
export default controls;
