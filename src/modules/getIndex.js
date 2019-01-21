/**
 * Get the index of the current focused item
 * @param {*} el
 * @param {*} nodelist
 * @param {*} direction
 */
let getIndex = (el, nodelist, direction = 'next') => {
	let array = Array.prototype.slice.call(nodelist); // Now it's an Array.
	let pos = array.indexOf(el);
	if(pos !== -1){
		return (direction === 'previous') ? pos - 1 : pos + 1;
	}
}
module.exports = getIndex;
