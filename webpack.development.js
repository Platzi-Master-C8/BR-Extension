const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname,'dist'),
      watch: true,
    },
    watchFiles: path.join(__dirname,'./**'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
    open: {
      app: {
        name: "Google Chrome"
      }
    }
  }
})