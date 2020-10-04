var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin(
      {
        title: 'bbter - 白炳钿',
        template: 'src/assets/index.html'
      }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
