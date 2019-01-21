/**
 *
 * @param {*} selectors
 */
let setTabIndex = (selectors = '') => {

	// Get selectors
	if(!selectors){
		return false;
	}

	// Loop all selectors
	selectors.forEach(selector => {
		selector.tabIndex = 0;
	});

}
module.exports = setTabIndex;
