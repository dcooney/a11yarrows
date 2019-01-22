/**
 *
 * @param {*} options
 */
let setTabIndex = (options = '') => {

	// Get selectors
	if(!options.target || !options.selector){
		return false;
	}

	// Get all selectors
	let selectors = options.target.querySelectorAll(options.selector);

	// Convert NodeList to array (IE fix)
	selectors = (selectors) ? Array.prototype.slice.call(selectors) : selectors;

	// Loop all selectors
	selectors.forEach(selector => {
		selector.tabIndex = 0;
	});

}
module.exports = setTabIndex;
