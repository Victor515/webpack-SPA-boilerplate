# webpack-SPA-boilerplate
A demo I created to config webpack for single page applications.  
  
Configuration covers npm integration, installation of webpack-dev-server and some frequently used loaders and plugins.

Thanks for [Val-Zhang's repository](https://github.com/Val-Zhang/blogs/tree/master/sources/webpackTest).

## Full Feature List

* npm integration(in package.json)  
```
  "scripts": {
    "start": "npm run build",
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "webpack-dev-server --open",
    "build": "webpack --env.NODE_ENV=production --config ./webpack.production.config.js --progress"
  },
```
Note: `npm start` will build the project in production environment. `npm run server` will start the web-dev-server for local 
development.

* source maps: use `eval-source-map`. This should only be used in local development.

* webpack-dev-server: By default the project is running at http://localhost:8080

* Loaders:  
  1. babel-loader(config in .babelrc), with babel-core + babel-env-preset(for ES6) + babel-preset-react(for React JSX)
  2. css-loader + style-loader  
  3. css-module, need to uncomment in css-loader options:
  ```js
  // options: {
  //   modules: true, // enable css modules
  //   localIdentName: '[name]__[local]--[hash:base64:5]' // css class names
  // }
  ```
  4. postcss-loader and autoprefixer plugin  

* plugins:
  1. BannerPlugin(built-in plugin): `new webpack.BannerPlugin('Created by Victor Ouyang')`
  2. HtmlWebpackPlugin
  3. 
