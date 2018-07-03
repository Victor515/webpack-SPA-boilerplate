module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",// the entry point
    output: {
      path: __dirname + "/public", // the path to store bundled file
      filename: "bundle.js" // the name of bundled files
    },

    devServer:{
      contentBase: "./public",
      historyApiFallback: true,
      inline: true // real-time refresh
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
                    loader: "style-loader"
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
    }
  }