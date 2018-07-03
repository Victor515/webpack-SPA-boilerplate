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
