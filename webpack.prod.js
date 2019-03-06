const common = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Without this plugin the copy webpack plugin does not work.
// Found solution here: https://github.com/webpack-contrib/copy-webpack-plugin/issues/29
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new WriteFilePlugin({
            // exclude hot-update files
            test: /^(?!.*(hot)).*/
        }),
        new CopyWebpackPlugin([{ from: './assets', to: 'assets' }]),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};

module.exports = merge(common, config);
