const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
       },
       {
         test: /\.(scss|sass)$/,
         use: [
           'style-loader',
          //  MiniCssExtractPlugin.loader,
           'css-loader',
           'postcss-loader',
           'sass-loader'
         ]
       }
     ]
    },
    plugins: [
      new CleanWebpackPlugin('dist', {}),
      // new MiniCssExtractPlugin({
      //   filename: 'style.[contenthash].css',
      // }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
      new WebpackMd5Hash(),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv()
    ],
  }
};