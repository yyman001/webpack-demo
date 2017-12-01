/**
 * Created by lenovo on 2017/12/1.
 */
module.exports = {
	test: /\.scss$/,
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
		},
		{
			loader: "sass-loader"
		}
	]
}