const HtmlWebPackPlugin = require("html-webpack-plugin"); 
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
    entry: './frontend/app.js',
    output: {path: path.resolve(__dirname, './dist'), filename: '[name].js'},
    plugins: [
        new HtmlWebPackPlugin({ 
        template: "./frontend/static/index.html",
        filename: "./index.html"
      })
    ]
};