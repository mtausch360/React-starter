const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/build');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
  entry: [
    APP_DIR + '/index.jsx',
    APP_DIR + '/index.less'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      include: APP_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },{
      test: /\.js$/,
      include: APP_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.less$/,
      loader: "style!css!less",
    }, {
      test: /\.css$/,
      loader: "style!css",
    }]
  },
  devServer: {
    contentBase: './client',
    port: 8000
  }
};

module.exports = config;
