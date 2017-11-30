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
            },
            {
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
        ]
    }
}