'use strict';

const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
	devtool: 'source-map',
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
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new MinifyPlugin()
	],
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
							useBuiltIns: true,
							debug: true,
							modules: false
						}]
					]
				}
			}
		]
	}
};
