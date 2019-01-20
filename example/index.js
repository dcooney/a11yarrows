import a11yarrows from '../src/a11yarrows';
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
