const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/js/components/container/FormContainer.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {loader: "html-loader"}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/html/index.html",
			filename: "./index.html"
		})
	]
};
