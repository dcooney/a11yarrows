import a11yarrows from '../index.js';

let list = document.querySelector('#list');
if(list){
	var arrows = new a11yarrows(list, {
		// options
		selector: 'li',
		hasParent: false,
		start: '#meow',
		end: '#meowEnd'
	});
}
// let list2 = document.querySelector('#list2');
// if(list2){
// 	var arrows = new a11yarrows(list2, {
// 		// options
// 		selector: 'li',
// 		hasParent: false,
// 		start: '#meow',
// 		end: '#meowEnd'
// 	});
// }
