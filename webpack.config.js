const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        static: './dist',
    },
    entry: {
        splash: './src/splash.ts',
        play: './src/index07_map.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', exclude: /node_modules/,
            }
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/favicon.ico', to: 'favicon.ico' },
                { from: 'src/images/splash.png', to: 'images/splash.png' },
                { from: 'src/styles.css', to: 'styles.css' }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/splash.html',
            filename: 'index.html',
            chunks: ['splash'],
            favicon: 'src/favicon.ico'
        }),
        new HtmlWebpackPlugin({
            template: './src/play.html',
            filename: 'play.html',
            chunks: ['play'],
            favicon: 'src/favicon.ico'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts'],
        modules: ['src', 'node_modules'],
    },
}