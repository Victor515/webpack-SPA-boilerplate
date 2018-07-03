const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin"); // help clean the dist folder before building

module.exports = {
    devtool: 'null',
    entry:  __dirname + "/app/main.js",// the entry point
    output: {
      path: __dirname + "/dist", // the path to store bundled file
      filename: "bundle-[hash].js" // the name of bundled files
    },
    optimization: {
        minimize: true
    },

    devServer:{
      contentBase: "./public",
      historyApiFallback: true,
      inline: true, // real-time refresh
    },

    module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                }, 
                {
                    loader: "css-loader",
                    options: {
                      modules: true, // enable css modules
                      localIdentName: '[name]__[local]--[hash:base64:5]' // css class names
                  }
                },
                {
                    loader: "postcss-loader"
                }
            ]
          }
      ]
    },

    plugins: [
        new webpack.BannerPlugin('Created by Victor Ouyang'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
  }