const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    // publicPath: 'http:localhost:8080/'
  },
  devServer: {
    host: "0.0.0.0"
  },
  mode: "development",
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 90000,
            name: "[hash].[ext]",
            outputPath: "images"

          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    })
  ]
}