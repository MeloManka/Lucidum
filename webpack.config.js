const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './home',
  output: {
    filename: 'build.js'
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/
  },
  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
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
              presets: ['es2015', 'stage-2'],
              plugins: ['transform-runtime']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    //new webpack.optimize.UglifyJsPlugin()
  ]
};