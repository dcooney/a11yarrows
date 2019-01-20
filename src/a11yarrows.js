import defaults from './modules/defaults';
import dispatch from './modules/dispatch';
import setTabIndex from './modules/tabindex';


/**
 * a11yarrows creates event listeners for arrow keys
 * @param {*} target
 * @param {*} options
 */
let a11yarrows = (target, options) => {

	// Set options
	options = Object.assign({}, defaults, options);
	options.target = target;
	options.next = (options.next) ? options.next : 'down';
	options.prev = (options.prev) ? options.prev : 'up';

	//console.log(options);

	// Exit if target and selector are not set
	if(!options.target || !options.selector) return;

	// Set tabindex on elements so they can be focused
	setTabIndex(options.target, options.selector, options.start, options.end);

	// Add event listener to selectors
	window.addEventListener(options.event, function(e){
		dispatch(e, options);
	});

}
export default a11yarrows;
