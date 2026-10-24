'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: './example/client/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'app.js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname)
		}
	},
	stats: {
		colors: true,
		modules: false
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env']]
					}
				}
			},
		]
	},
	performance: {
		maxAssetSize: 500000,
		maxEntrypointSize: 500000
	}
};
