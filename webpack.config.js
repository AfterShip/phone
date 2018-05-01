const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	devtool: 'source-map',
	entry: './lib/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		library: 'phone',
		globalObject: "typeof self !== 'undefined' ? self : this",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'lib')],
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						[
							'env',
							{
								targets: {
									browsers: '>1%',
									node: '8.11.1',
								},
								modules: false,
								debug: true,
							},
						],
					],
				},
			},
		],
	},
};
