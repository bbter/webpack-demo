const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "bbter - 白炳钿",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.styl$/,
        loader: ["style-loader","css-loader","stylus-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader","css-loader","less-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
