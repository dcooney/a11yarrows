/**
 *
 * @param {*} selector
 * @param {*} start
 * @param {*} end
 */
let setTabIndex = (selectors = '', start = '', end = '') => {

	// Get selectors
	if(!selectors){
		return false;
	}

	// Loop all selectors
	selectors.forEach(selector => {
		selector.tabIndex = 0;
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
