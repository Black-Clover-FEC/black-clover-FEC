const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.jsx'),

  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },

  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {loader: "babel-loader",},
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'client/src/index.html' })
  ],

  stats: {
    children: true
  },

  mode: 'development'
};