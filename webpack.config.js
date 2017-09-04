'use strict';

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: './lib/index.js',
	output: {
		path: path.resolve(__dirname, 'web'),
		filename: 'index.js'
	},
	plugins: [
		new MinifyPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'lib')
				],
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						['env', {
							targets: {
								browser: '>1%'
							}
						}]
					]
				}
			}
		]
	}
};
