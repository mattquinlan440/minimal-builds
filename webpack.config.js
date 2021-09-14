const path = require('path');
const webpack = require('webpack');

const config = {
    context: path.join(__dirname, 'src'),
    optimization: {
        minimize: true
    },
    mode: 'production',
    output: {
        filename: '[name].js',
        globalObject: "typeof self !== 'undefined' ? self : this",
        library: 'meeseeks',
        libraryTarget: 'umd',
        path: __dirname
    },
    entry: {
        'umd/meeseeks': './index.js'
    }
}

module.exports = config;