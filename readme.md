# a11yarrows
Enable keyboard arrow navigation on focusable elements.

## Install

a11yarrows can be installed via via [NPM](https://www.npmjs.com/package/a11yarrows):

`$ npm install a11yarrows --save`

or by direct script include:

`<script src="{path_to_scripts}/a11yarrows.js">`

## Initialize

At minimum, a11yarrows requires a `target` HTML element to be passed in. 

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

or direct `<script/>` include:

`<script src="node_modules/a11yarrows/dist/a11yarrows.js">`

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

| Option   | Description                                                                      |
|----------|----------------------------------------------------------------------------------|
| selector | The target child elements to recieve focus. `default 'a'`                        |
| event    | EventListener. `default 'keydown'`                                               |
| next     | Keyboard key to move to next element. `default 'down'`                           |
| prev     | Keyboard key to move to previous element. `default 'up'`                         |
| start    | Optional previous element to recieve focus when at start of list. `default null` |
| end      | Optional next element to recieve focus when at end of list. `default null`       |


## License
a11yarrows is released under the MIT license.


