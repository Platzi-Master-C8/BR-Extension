const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const env = dotenv.config().parsed;
const currentPath = path.join(__dirname);

const basePath = currentPath + "/.env";

const envPath = basePath + "." + env.ENVIRONMENT;

const finalPath = fs.existsSync(envPath) ? envPath : basePath;

const fileEnv = dotenv.config({ path: finalPath }).parsed;

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/index-popup.js"),
    options: path.resolve(__dirname, "src/index-options.js"),
    foreground: path.resolve(__dirname, "src/index-foreground.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Components: path.resolve(__dirname, "src/components/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Styles: path.resolve(__dirname, "src/styles/"),
      Atoms: path.resolve(__dirname, "src/components/atoms/"),
      Molecules: path.resolve(__dirname, "src/components/molecules/"),
      Organisms: path.resolve(__dirname, "src/components/organisms/"),
      Templates: path.resolve(__dirname, "src/components/templates/"),
      Images: path.resolve(__dirname, "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "svg-url-loader"],
      },
      {
        test: /\.woff2?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/manifest.json", to: "[name][ext]" },
        { from: "src/background.js", to: "[name][ext]" },
        { from: "src/helpers/contentScript.js", to: "[name][ext]" },
        { from: "src/assets/images/*.png", to: "[name][ext]" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/popup.html",
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/options.html",
      filename: "options.html",
      chunks: ["options"],
    }),
  ],
};
