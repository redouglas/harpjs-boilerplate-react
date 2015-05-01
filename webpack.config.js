var webpack = require('webpack');

module.exports = {
  entry: {
      app: './_js/tools/Main.coffee'
  },
  watch: false,
  output: {
    filename: "[name].build.js"
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.js$/,  loader: 'jsx-loader' }
    ]
  },
  resolve: {
    extensions: ["", ".coffee", ".jsx", ".js"]
  }
};
