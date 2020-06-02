/**
 * Build an array of keycodes
 * @param {*} option
 * @param {*} keycodes
 */
let keycodeArray = (option, keycodes) => {
	let array = option.split(" ");
	let codeArray = [];
	for (let i = 0; i < array.length; i++) {
		codeArray.push(keycodes[array[i]]);
	}
	return codeArray;
};
module.exports = keycodeArray;
