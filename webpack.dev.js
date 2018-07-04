const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    mode: 'development',
    devServer:{
      contentBase: "./public",
      historyApiFallback: true
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
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
      }
})