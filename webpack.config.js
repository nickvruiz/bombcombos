const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelPlugins = [
	'transform-object-rest-spread',
	'transform-decorators-legacy',
	'transform-class-properties'
];

module.exports = {
	entry: './src/Routes.js',

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	resolve: {
		root: path.resolve(__dirname),
		alias: {
			containers: 'src/containers',
			components: 'src/components',
			constants: 'src/constants',
			helpers: 'src/helpers',
			routes: 'src/routes'
		}
	},

	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel',
				exclude: /(node_modules)/,
				query: {
					presets: ['es2015', 'react'],
					plugins: babelPlugins
				}
			},
			{
				test: /\.less$/,
				loader: 'style!css!less',
				exclude: /(node_modules)/
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=100000',
				exclude: /(node_modules)/
			},
			{
				test: /\.(jpg|svg)$/,
				loader: 'file-loader',
				exclude: /(node_modules)/
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			hash: false,
			inject: false,
			template: 'src/index.html'
		})
	],

	watch: true
};
