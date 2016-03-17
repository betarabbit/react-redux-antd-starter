const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './src'),

  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './index.js',
    ],
    vendors: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].js',
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name].js'),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader'),
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, 'src'),
        loader: 'style!css',
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?prefix=img/&limit=10000',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?prefix=font/&limit=10000',
      },
    ],
  },

  postcss: [autoprefixer],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
