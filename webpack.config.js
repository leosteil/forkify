const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//entry ponit
	entry: ['@babel/polyfill', './src/js/index.js'],

	//output where to salve the bundle
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
	},

	devServer: {
		contentBase: './dist'
	},

	//plugins
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],

	//loaders

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}


};