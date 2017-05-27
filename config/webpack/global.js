const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var stylefmt = require('stylefmt');

module.exports = function (_path) {
    return {
        context: path.resolve(__dirname, "app"),
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
            app: path.resolve(__dirname, "app/index")
        },
        externals: {
            'angular': 'angular'
        },
        resolve: {
            modulesDirectories: ['node_modules']
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'app.js'
        },
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
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.jade$/,
                    use: [
                        {
                            loader: 'jade-loader'
                        }
                    ]
                },
                {
                    test: /\.(woff|eot|ttf|svg|otf)$/,
                    use: [
                        {
                            loader: 'file-loader?name=fonts/[name].[ext]'
                        }
                    ]
                },
                {
                    test: /\.(jpeg|jpg|png)$/,
                    use: [
                        {
                            loader: 'file-loader?name=images/[name].[ext]'
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: ExtractTextPlugin.extract({
                                fallback: 'style-loader',
                                use: ['css-loader!postcss-loader']
                            })
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.js'
            }),
            new ExtractTextPlugin('index.css'),
            new HtmlPlugin({
                title: 'Test APP',
                chunks: ['app', 'vendor'],
                filename: 'index.html',
                template: path.join(_path, 'public', 'src', 'layout.jade')
            })
        ]
    };
};
