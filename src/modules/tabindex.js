/**
 *
 * @param {*} selectors
 */
let setTabIndex = (selectors = '') => {

	// Get selectors
	if(!selectors){
		return false;
	}

	// Convert NodeList to array (IE fix)
	let array = Array.prototype.slice.call(selectors);

	// Loop all selectors
	array.forEach(selector => {
		selector.tabIndex = 0;
	});

}
module.exports = setTabIndex;
