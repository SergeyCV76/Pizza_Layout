const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');
const { Template } = require('webpack');

let fs = require('fs');
const header = fs.readFileSync(__dirname + '/src/_header.html');
const footer = fs.readFileSync(__dirname + '/src/_footer.html');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist',
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'src/main.html',
      header: header,
      footer: footer,
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: 'src/menu.html',
      header: header,
      footer: footer,
    }),
    new HtmlWebpackPlugin({
      filename: 'order.html',
      template: 'src/order.html',
      header: header,
      footer: footer,
    }),
    new HtmlWebpackPlugin({
      filename: 'info.html',
      template: 'src/info.html',
      header: header,
      footer: footer,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img", to: "assets/img" },        
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          "sass-loader"
        ],
      },
    ],
  },

};