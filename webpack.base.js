const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/GlobeMap.js'),
    output: {
        filename: 'GlobeMap.js',
        library: 'GlobeMap',
        path: path.resolve(__dirname, 'dist'),
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-template-literals']
                    }
                },
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        alias: {
            node_modules: path.resolve(__dirname, './node_modules')
        },
        extensions: ['.js']
    }
};
