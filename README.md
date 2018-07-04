# webpack-SPA-boilerplate
A demo I created to config webpack for single page applications.  
  
Configuration covers npm integration, installation of webpack-dev-server and some frequently used loaders and plugins.

Thanks for [Val-Zhang's repository](https://github.com/Val-Zhang/blogs/tree/master/sources/webpackTest).

## Full Feature List

### npm integration(in package.json)  
```
  "scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.prod.js --progress"
  },
```
Note: `npm start` will run the web-dev-server for local development. `npm run build` will build the project in production environment.

### Loaders:  
  1. babel-loader(config in .babelrc), with babel-core + babel-env-preset(for ES6) + babel-preset-react(for React JSX)
  2. css-loader + style-loader  
  3. css-module, need to uncomment in css-loader options:
  ```js
  // options: {
  //   modules: true, // enable css modules
  //   localIdentName: '[name]__[local]--[hash:base64:5]' // css class names
  // }
  ```
  Also need to modify the css files, see `Greeter.css` file for example
  4. postcss-loader and autoprefixer plugin  

### plugins:
  1. BannerPlugin(built-in plugin): `new webpack.BannerPlugin('Created by Victor Ouyang')`
  2. HtmlWebpackPlugin: webpack will inject bundled js and css into the template you provide
  3. MiniCssExtractPlugin: Seperate CSS files from JS, in place `style-loader`
  Note: This can be used to minimize CSS in production mode, see [documentation](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)
  4. CleanWebpackPlugin: Clean `./dist` folder every time before building

### others:
  1. source maps: use `eval-source-map`. This should only be used in local development.
  Edit: Now I add source-map to production mode as well.
  2. webpack-dev-server: By default the project is running at http://localhost:8080
  3. Add a hash value to output file name, useful for cache:  
  ```
  output: {
      path: __dirname + "/dist", // the path to store bundled file
      filename: "[name].bundle-[hash].js" // the name of bundled files
  },
  ```
  4. Specify `NODE_ENV` in production mode to help some libraries to optimize
  
