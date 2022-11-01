const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		popup: path.join(__dirname, 'src/popup.tsx'),
		content: path.join(__dirname, 'src/content.ts'),
		background: path.join(__dirname, 'src/background.ts')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						preset: ['@babel/preset-react']
					}
				},
			},
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'public', to: '.'}],
		})
	],
	experiments: {
		topLevelAwait: true
	}
}
