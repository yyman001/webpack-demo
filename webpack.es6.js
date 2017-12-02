const path = require('path');
// const WebpackMonitor = require('webpack-monitor');
const CssLoaderConfig = require('./loader/css.loader.config');
const es6LoaderConfig = require('./loader/es6.loader.config');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
	        CssLoaderConfig,
	        es6LoaderConfig
        ]
    },
	devServer: {
		publicPath: '/',
		contentBase: './',
		historyApiFallback: true,
		open: true,
		inline: true
	},
    plugins: [
        // new WebpackMonitor({
        //   capture: true, // -> default 'true'
        //   target: '../monitor/myStatsStore.json', // default -> '../monitor/stats.json'
        //   launch: true, // -> default 'false'
        //   port: 3030, // default -> 8081
        // }),
      ]
}