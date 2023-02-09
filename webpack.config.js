const path = require('path');
const JsDocPlugin = require('jsdoc-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
	},
	plugins: [
		new JsDocPlugin({
			conf: 'jsdoc.config.json',
			cwd: '.',
			preserveTmpFile: false,
		}),
	],
};
