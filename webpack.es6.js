const path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
               test: /\.(jsx|js)$/,
               use: {
                   loader: "babel-loader"
               },
               exclude: /node_modules/
           }
        ]
    }
}