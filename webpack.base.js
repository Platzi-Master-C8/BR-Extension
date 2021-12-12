const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/index-popup.js"),
    options: path.resolve(__dirname, "src/index-options.js"),
    foreground: path.resolve(__dirname, "src/index-foreground.js"),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@componentStyles': path.resolve(__dirname, 'src/components/styles/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'svg-url-loader'
        ]
      },
      {
        test: /\.woff2?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        }
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/manifest.json", to: "[name][ext]" },
        { from: "src/background.js", to: "[name][ext]" },
        { from: "src/helpers/contentScript.js", to: "[name][ext]" },
        { from: "src/assets/images/*.png", to: "[name][ext]" },
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/popup.html',
      filename: 'popup.html',
      chunks: ["popup"]
    }),
    new HtmlWebpackPlugin({
      template: './public/options.html',
      filename: 'options.html',
      chunks: ["options"]
    }),
  ]
}