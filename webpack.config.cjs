const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		plugins: [require('pnp-webpack-plugin')]
	},
	resolveLoader: {
		plugins: [require('pnp-webpack-plugin').topLevel]
	},
	devServer: {
		static: [
			{
				directory: path.resolve(__dirname, './dist')
			},
			{
				directory: path.resolve(__dirname, '/src')
			}
		],
		port: 4200,
		open: true,
		historyApiFallback: true
	},
	mode: 'development'
}
