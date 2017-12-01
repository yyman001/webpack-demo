const path = require('path');
const cssLoaderConfig = require('./loader/css.loader.config');
const scssLoaderConfig = require('./loader/scss.loader.config');

module.exports = {
    entry: './css.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
	        cssLoaderConfig,
	        scssLoaderConfig
        ]
    }
}