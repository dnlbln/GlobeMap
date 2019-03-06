const common = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Without this plugin the copy webpack plugin does not work.
// Found solution here: https://github.com/webpack-contrib/copy-webpack-plugin/issues/29
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = {
    mode: 'development',
    devServer: {
        port: 8090,
        index: '/example/index.html'
    },
    plugins: [
        new WriteFilePlugin({
            // exclude hot-update files
            test: /^(?!.*(hot)).*/
        }),
        new CopyWebpackPlugin([{ from: './assets', to: 'assets' }])
    ]
};

module.exports = merge(common, config);
