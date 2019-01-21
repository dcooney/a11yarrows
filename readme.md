# a11yarrows
Enable keyboard arrow navigation on focusable elements.

## Install

a11yarrows can be installed via [NPM](https://www.npmjs.com/package/a11yarrows):

`$ npm install a11yarrows --save`

or by direct script include:

`<script src="{path_to_scripts}/a11yarrows.js">`

## Initialize

At minimum, a11yarrows requires a `target` HTML element to be defined and passed into the `a11yarrows` function call. The `target` element should be a container element that wraps your list.

`let target = document.querySelector('#a11y-list');`

There is also an optional [`options`](#options) object that can modify default parameters.

`a11yarrows(target, options);`

Initialize as ES6 Module:

```
import a11yarrows from 'a11yarrows';

let target = document.querySelector('#a11y-list');
a11yarrows(target, {
	// options
	selector: 'li'
});
```

Initialize with Vanilla JS:

```
let target = document.querySelector('#a11y-list');
a11yarrows(target, {
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


