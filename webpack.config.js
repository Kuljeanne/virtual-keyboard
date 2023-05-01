/* eslint-disable no-unused-vars */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

module.exports = () => {
  const config = {
    devtool: 'source-map',
    entry: ['./src/index.js', './src/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /.eslintrc.js/],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new CopyPlugin({
        patterns: [{
          from: './src/assets',
          to: './assets',
          noErrorOnMissing: true,
        }],
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
  };

  return config;
};
