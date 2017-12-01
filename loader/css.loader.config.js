/**
 * Created by lenovo on 2017/12/1.
 */

module.exports = {
	test: /\.css$/,
	use: [
		{
			loader: "style-loader"
		},
		{
			loader: "css-loader",
			options: { importLoaders: 1 }
		},
		{
			loader: "postcss-loader"
		}
	]
}