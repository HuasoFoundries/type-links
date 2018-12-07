# param-links

Collection of parameter types with their respective reference links

This project is a helper meant to be used with [Documentation.js](https://documentation.js.org/).

As you may know, Documentation.js Node.js's API allows you to output the documentation result in different formats. 

Each formatter accepts an *options* object, among which the `path` key is meant to link a parameter type with its respective source.

Let's say we want to generate our documentation in [Markdown format](https://github.com/documentationjs/documentation/blob/master/docs/NODE_API.md#formatsmarkdown). 

And we want to document a simple [Express](http://expressjs.com) route.


```js
/**
 * Renders the welcome screen
 *
 * @name get/home
 * @memberof routes/app
 * @inner
 *
 * @param {Express.req}        req                      - Express request
 * @param {Express.res}        res                      - Express response
 * @param {Express.middleware} next                     - Express middleware
 *
 * @return {string} the rendered home template
 */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Welcome to my site'
    });
});
```


In that case, doing

```js
	const paths = {
		"Express.req": 'http://expressjs.com/es/api.html#req',
  		"Express.middleware": 'http://expressjs.com/en/guide/using-middleware.html',
  		"Express.res": 'http://expressjs.com/es/api.html#res'
	};

	documentation.build(['routes/app.js'])
	.then(res => {
    	return documentation.formats.md(res, { 	paths    });
	}).then(output => {
    
    	return fs.writeFileSync(`${__dirname}/ROUTE.md`, output);

	}).catch(function (err) {
	    console.error(err);
	    return;
	});
  
```

Will automagically link those Express-type parameters to their respective docs and definitions.

Documentation.js already does this for native JS primitives (strings, numbers, objects, arrays...) pointing to MDN, but you can expand that feature as far as you want.

At this point, there are parameters for 

 - Google Maps API
 - GeoJSON Types
 - Backbone objects
 - Express objects
 - Facebook API endpoints and types


 So instead of manually writing your parameter-link mapping, you can do:

 ```js

 	let paths = require('param-links');
 	
 	// add or replace paths as you wish
 	Object.assign(paths, {
 		paramx:'https://paramx.com'
 	});

 	documentation.build(...)

 ```

Let me see those contributions!