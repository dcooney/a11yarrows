import a11yarrows from '../index';
let list = document.querySelector('#list');
if(list){
	a11yarrows(list, {
		// options
		selector: 'li',
		hasParent: false,
		start: '#startEl',
		end: '#endEl'
	});
}
