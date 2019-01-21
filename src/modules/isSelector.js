/**
 * Loop over selectors to determine if the current focused element is in array
 * @param {*} el
 * @param {*} nodelist
 * @param {*} options
 */
let isSelector = (el, nodelist) => {
	let array = Array.prototype.slice.call(nodelist); // Now it's an Array.
	let pos = array.indexOf(el);
	return (pos === -1) ? false : true;
}
module.exports = isSelector;
