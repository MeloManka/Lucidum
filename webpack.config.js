var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      "./node_modules/angular/angular.js",
      "./node_modules/@uirouter/angularjs/release/angular-ui-router.min.js",
      "./node_modules/angular-aria/angular-aria.js",
      "./node_modules/angular-animate/angular-animate.js",
      "./node_modules/angular-material/angular-material.js",
      "./node_modules/angular-material-icons/angular-material-icons.min.js"
    ],
    app: path.resolve(__dirname, 'app/index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['env']
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpeg|jpg|woff|eot|ttf|svg|otf)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'assets/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lucidum',
      template: 'app/index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 9988
  },
  resolve: {
    alias: {
      'angularMaterial': path.resolve(__dirname, 'node_modules/angular-material')
    }
  }
};