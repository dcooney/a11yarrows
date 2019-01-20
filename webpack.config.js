var path = require('path');
var dir = 'dist';
module.exports = {
   entry: {
      a11yarrows: "./src/a11yarrows.js",
      test: "./example/index.js"
   },
	output: {
   	path: path.join(__dirname, dir),
      filename: "[name].js",
		libraryTarget: 'var',
		library: '[name]'
   },
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env']
				}
			},
		]
	},
	plugins: []
};
