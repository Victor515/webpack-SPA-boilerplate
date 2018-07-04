const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
    devtool: 'source-map', // source map for production
    mode: 'production', // this will enable built-in optimizations for production 
    plugins: [
    new UglifyJSPlugin({
        // set up UglifyJSPlugin to enbale source map in production build
        sourceMap: true
    }),
    new webpack.DefinePlugin({
        // set NODE_ENV to production
        'process.env.NODE_ENV': JSON.stringify('production')
    })
    ]
})