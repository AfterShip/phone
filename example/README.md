## AfterShip Phone browser usage

We use the new `Array.prototype.find` function to simplify the coding. To support for older browser. You need to include the `polyfill` yourself. Here is live example to use `phone` browser. In this example we use `webpack`, `babel-polyfill` and  `babel-preset-env` to simplify and optimize the build for target browser env. of cause you can using other services or package like `https://polyfill.io/`, `core-js`, etc.

You can running this example by

1. git clone git@github.com:AfterShip/phone.git
2. yarn install
3. yarn run start:example
4. navigate to `localhost:8080`

```javascript
// client/index.js
import 'babel-polyfill';
```

```javascript
// webpack.config.js
'use strict';

const path = require('path');

module.exports = {
	entry: './example/client/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'app.js'
	},
	devServer: {
		contentBase: path.join(__dirname),
		stats: {
			colors: true,
			modules: false
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						['env', {
							targets: {
								browsers: '>1%'
							},
							useBuiltIns: true, // optimize build for the babel-polyfill
							debug: true,
							modules: false
						}]
					]
				}
			}
		]
	}
};

```
