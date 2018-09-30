const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./client/src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./client/public/index.html"
		})
	],
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "dist")
	}
};