# a11yarrows
Enable keyboard arrow navigation on focusable elements.

## Install

a11yarrows can be installed via [NPM](https://www.npmjs.com/package/a11yarrows):

`$ npm install a11yarrows --save`

or by direct script include:

`<script src="{path_to_scripts}/a11yarrows.js">`

## Initialize

At minimum, a11yarrows requires a `target` HTML element to be defined and accepts an [`options`](#options) object.

`a11yarrows(target, options);`

ES6 Module:

```
import a11yarrows from 'a11yarrows';

let list = document.querySelector('#list');
a11yarrows(list, {
	// options
	selector: 'li'
});
```

Vanilla JS:

```
let list = document.querySelector('#list');
a11yarrows(list, {
	// options
	selector: '.item',
	next: 'right',
	prev: 'left'
});
```

## Options
a11yarrows accept a number of configuration parameters:

| Option   	| Description                                               	|
|----------	|-----------------------------------------------------------	|
| selector 	| The target child elements to recieve focus. `default 'a'` 	|
| event    	| JavaScript EventListener. `default 'keydown'`                        	|
| next     	| Keyboard key to move to next element. `default 'down'`    	|
| prev     	| Keyboard key to move to previous element. `default 'up'`  	|


## License
a11yarrows is released under the MIT license.


