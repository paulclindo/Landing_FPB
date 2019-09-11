const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const TersetJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  optimization: {
    minimizer: [new TersetJSPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[hash].[ext]",
            outputPath: "assets",
            publicPath: '../assets'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    }),

    new CleanWebpackPlugin({

    })
  ]
};