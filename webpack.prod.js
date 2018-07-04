const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extract css from js

module.exports = merge(common, {
    devtool: 'null', // no source map
    mode: 'production', // this will enable built-in optimizations for production 
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader
                  }, 
                  {
                      loader: "css-loader",
                      // options: {
                      //   modules: true, // enable css modules
                      //   localIdentName: '[name]__[local]--[hash:base64:5]' // css class names
                      // }
                  },
                  {
                      loader: "postcss-loader"
                  }
              ]
            }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ],
})