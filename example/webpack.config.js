const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './example/client/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'app.js',
	},
	devServer: {
		contentBase: path.join(__dirname),
		stats: {
			colors: true,
			modules: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					presets: [
						[
							'env',
							{
								targets: {
									browsers: '>1%',
								},
								useBuiltIns: true,
								debug: true,
								modules: false,
							},
						],
					],
				},
			},
		],
	},
};
