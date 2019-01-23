var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/external-interfaces/web-ui/index.js'],
    output: {
        path: path.resolve(__dirname, './build/web-build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/external-interfaces/web-ui/index.html'),
            title: "Coffer: Budget Application"
        }),
        new CleanWebpackPlugin('./build/web-build', {}),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};