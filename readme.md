# a11yarrows
Enable keyboard arrow navigation on focusable elements.

## Install

a11yarrows is available via [NPM](https://www.npmjs.com/package/a11yarrows)

`$ npm install a11yarrows --save`

## Initialize

ES6 Module:

```
import a11yarrows from 'a11yarrows';

let list = document.querySelector('#list');
a11yarrows(list, {
	selector: 'li'
});
```

or direct `<script/>` include:

`<script src="node_modules/a11yarrows/dist/a11yarrows.js">`

```
let list = document.querySelector('#list');
if(list){
	a11yarrows(list, {
		// options
		selector: '.item',
		next: 'right',
		prev: 'left'
	});
}
```

## Options

| Option   | Description                                                               |
|----------|---------------------------------------------------------------------------|
| selector | Child elements will be used as focus elements. `default 'a'`              |
| event    | EventListener. `default 'keydown'`                                        |
| start    | The previous element to recieve focus if at start of list. `default null` |
| end      | The next element to recieve focus if at end of list. `default null`       |
| next     | Keyboard key to move to next element. `default 'down'`                    |
| prev     | Keyboard key to move to previous element. `default 'up'`                  |
