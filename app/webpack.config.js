var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    root: [
      path.resolve('src/scripts'),
      path.resolve('src/scripts/vendor'),
    ],
    alias: {
      'jquery' : 'jquery.min',
      'TweenMax' : 'TweenMax'
    }
  },
  entry: [
    'babel-polyfill',
    'main.js',
  ],
  output: {
  	path: path.resolve('public/javascripts/'),
    publicPath: '/javascripts/',
    filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, 'src/scripts'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [require.resolve('babel-preset-es2015')],
          plugins: [
            ["transform-es2015-classes", {
              "loose": true
            }]
          ]
        }
      }
    ]
  },
  devServer: {
    hot: true,
    publicPath: '/javascripts/',
    proxy: {
      '**': 'http://localhost:3000'
    }
  }
};
