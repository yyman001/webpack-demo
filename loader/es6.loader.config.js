/**
 * Created by lenovo on 2017/12/1.
 */
module.exports = {
	test: /\.(jsx|js)$/,
	use: {
		loader: "babel-loader"
	},
	exclude: /node_modules/
}