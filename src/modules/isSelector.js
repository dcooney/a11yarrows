/**
 * Loop over selectors to determine if the current focused element is in array
 * @param {*} el
 * @param {*} nodelist
 * @param {*} options
 */
let isSelector = (el, nodelist, options) => {
	let array = Array.prototype.slice.call(nodelist); // Now it's an Array.

	if(options.start && document.querySelector(options.start)){
		array.push(document.querySelector(options.start));
	}
	if(options.end && document.querySelector(options.end)){
		array.push(document.querySelector(options.end));
	}

	let pos = array.indexOf(el);
	return (pos === -1) ? false : true;
}
module.exports = isSelector;
