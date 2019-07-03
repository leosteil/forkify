const path = require('path');

module.exports = {
	//entry ponit
	entry: './src/js/index.js',

	//output where to salve the bundle
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js',
	},

	devServer: {
		contentBase: './dist'
	}

	//loaders

	//plugins
};