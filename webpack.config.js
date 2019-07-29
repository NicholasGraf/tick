const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        // filename: "[name].js" // name of the generated bundle
        filename: "index.js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                loader: "file"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        new CopyPlugin([
            { from: 'src/img/', to: 'img/' }
        ])
    ]
};
