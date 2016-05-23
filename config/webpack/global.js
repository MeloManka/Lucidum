'use strict';

const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var stylefmt = require('stylefmt');

module.exports = function (_path) {
    return {
        entry: {
            vendor: [
                "./node_modules/angular/angular.js",
                "./node_modules/angular-ui-router/release/angular-ui-router.min.js",
                "./node_modules/angular-aria/angular-aria.js",
                "./node_modules/angular-animate/angular-animate.js",
                "./node_modules/angular-material/angular-material.js",
                "./node_modules/ngstorage/ngStorage.min.js",
                "./node_modules/angular-cookies/angular-cookies.min.js",
                "./node_modules/angular-material-icons/angular-material-icons.min.js"
            ],
            app: './public/src/index'
        },
        externals: {
            'angular': 'angular'
        },
        resolve: {
            modulesDirectories: ['node_modules']
        },
        output: {
            path: _path + '/public/dist',
            filename: 'app.js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.jade$/,
                loader: 'jade'
            }, {
                test: /\.(woff|eot|ttf|svg|otf)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }, {
                test: /\.(jpeg|jpg|png)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!postcss-loader'
                )
            }]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
            new ExtractTextPlugin('index.css'),
            new HtmlPlugin({
                title: 'Test APP',
                chunks: ['app', 'vendor'],
                filename: 'index.html',
                template: path.join(_path, 'public', 'src', 'layout.jade')
            })
        ],
        postcss: function () {
            return [precss, stylefmt, autoprefixer];
        }
    };
};
