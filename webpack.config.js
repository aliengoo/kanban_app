var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 9191,
    progress: true
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: APP_PATH
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
