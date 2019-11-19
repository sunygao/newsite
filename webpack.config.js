const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");

var ENV = process.env.NODE_ENV === "production" ? "production" : "development";

let filename = ENV === "production" ? "main.[chunkhash].js" : "main.js";
let cssFilename = ENV === "production" ? "app.[chunkhash].css" : "app.css";
let outputPath = path.resolve('public/javascripts/');

let devtool = ENV === "production" ? false : "inline-source-map";
let cache = true;
let watch = ENV === "production" ? false : true;

console.log("\nWebpack environment is: " + ENV + "\n");

const plugins = [
  new CleanWebpackPlugin(),
];

let devServer = {};
const entry = [__dirname + "/src/scripts/main.js"];

if (ENV === "production") {
  console.log("\n----- webpack is building files before launching app. ----\n");
  plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: cssFilename,
      chunkFilename: "[id]-[chunkhash].css"
    })
  );
  plugins.push(new LodashModuleReplacementPlugin());
  plugins.push(new WebpackAssetsManifest());
  // plugins.push(new BundleAnalyzerPlugin());
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());

  entry.push("webpack/hot/dev-server");

  devServer = {
    contentBase: "./public",
    hot: true,
    port: 8081,
    publicPath: ENV === "production" ? "/" : "http://localhost:8081/",
    proxy: {
      '**': 'http://localhost:3000'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS"
    }
  };
}


module.exports = {
  mode: ENV,
  resolve: {
    modules: [
      'node_modules',
      path.resolve('src/scripts'),
      path.resolve('views'),
      path.resolve('data')
    ],
    alias: {
      'jquery' : 'jquery',
      'TweenMax' : 'TweenMax',
      'underscore' : 'lodash'
    }
  },
  entry: entry,
  output: {
  	path: outputPath,
    publicPath: ENV === "production"
        ? '/javascripts/'
        : 'http://localhost:8081/',
    filename: filename
  },
  devtool: devtool,
  // devtool is defined on top and switched depending on the environment
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  target: "web",
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  devServer: devServer,

  module: {
    rules: [

      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      { 
        test: /\.m?js$/,
        include: path.join(__dirname, 'src/scripts'),
        exclude: /node_modules/,
        loader: 'babel-loader'
        
      },
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.scss$/,
        use:
          ENV === "production"
            ? [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    minimize: true,
                    sourceMap: false
                  }
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    autoprefixer: {
                      browsers: ["> 1%", "last 2 versions"]
                    }
                  }
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false
                  }
                }
              ]
            : [
                {
                  loader: "style-loader",
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: true
                  }
                },
                { loader: "postcss-loader", options: { sourceMap: true } },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: true
                  }
                }
              ]
      }
    ]
  },
  stats: {
    colors: true,
    errors: true,
    errorDetails: true
  },
  // lets you precisely control what bundle information gets displayed

  // list of additional plugins
  plugins: plugins,

  // optimization
  optimization: {
    noEmitOnErrors: true,
    mangleWasmImports: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: false,
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true
          },
          ie8: false,
          mangle: true,
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  // Advanced options
  bail: true,
  // fail out on the first error instead of tolerating it.

  cache: cache,
  // disable/enable caching

  watch: watch
};
