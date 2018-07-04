const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin"); // help clean the dist folder before building

module.exports = {
    entry:  {
        app: __dirname + "/app/main.js"
    }, // the entry point  
    output: {
      path: __dirname + "/dist", // the path to store bundled file
      filename: "[name].bundle.js" // the name of bundled files
    },
    module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/
          }
      ]
    },
    plugins: [
        new webpack.BannerPlugin('Created by Victor Ouyang'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
  }