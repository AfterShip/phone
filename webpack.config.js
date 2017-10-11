'use strict';

const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './lib/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'phone'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
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
								browsers: '>1%',
								node: '6.10'
							},
							modules: false,
							debug: true
						}]
					]
				}
			}
		]
	}
};
