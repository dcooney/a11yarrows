#a11yarrows


`import a11yarrows from 'a11yarrows';`

or

`<script src="node_modules/a11yarrows/dist/a11yarrows.js">`

```

let list = document.querySelector('#list');
if(list){
	a11yarrows(list, {
		// options
		selector: 'li',
		hasParent: false,
		start: '#meow',
		end: '#meowEnd'
	});
}
```
