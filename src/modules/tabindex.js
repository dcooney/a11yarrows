/**
 *
 * @param {*} target
 * @param {*} selector
 * @param {*} start
 * @param {*} end
 */
let setTabIndex = (target, selector, start = '', end = '') => {

	// Get selectors
	let elements = target.querySelectorAll(selector);
	if(!elements){
		return false;
	}

	// Loop all selectors
	elements.forEach(element => {
		element.tabIndex = 0;
	});

	// Start selector
	if(start && document.querySelector(start)){
		document.querySelector(start).tabIndex = 0;
	}

	// End selector
	if(document.querySelector(end)){
		document.querySelector(end).tabIndex = 0;
	}

}
module.exports = setTabIndex;
