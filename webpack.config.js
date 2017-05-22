const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/Routes.js'),

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	resolve: {
		modules: [
			path.resolve(__dirname),
			'node_modules'
		],
		alias: {
			containers: 'src/containers',
			components: 'src/components',
			constants: 'src/constants',
			helpers: 'src/helpers',
			routes: 'src/routes'
		}
	},

	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: [['es2015', { 'modules': false }], 'react'],
					plugins: [
						'transform-object-rest-spread',
						'transform-decorators-legacy',
						'transform-class-properties'
					]
				}
			},
			{
				test: /\.less$/,
				exclude: /(node_modules)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader'],
					publicPath: path.resolve(__dirname, 'build')
				})
			},
			{
				test: /\.png$/,
				exclude: /(node_modules)/,
				loader: 'url-loader',
				options: { limit: '100000' }
			},
			{
				test: /\.(jpg|svg)$/,
				exclude: /(node_modules)/,
				loader: 'file-loader'
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new HtmlWebpackPlugin({
			hash: false,
			inject: false,
			template: 'src/index.html'
		})
	],

	watch: true
};
