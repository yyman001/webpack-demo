const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                  use: ['css-loader', 'sass-loader']
                })
              }
        ]
    }
    ,plugins: [
      new ExtractTextPlugin("styles.css"),
    ]
}