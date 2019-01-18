const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const clientPath = path.resolve(__dirname);

module.exports = {
  entry: {
    main:path.resolve(clientPath,"index.js")
  },
  output:{
    publicPath:'/',
    path:path.resolve(clientPath,'dist'),
    filename:'src/[name].js'
  },
  module:{
    rules:[
    {
      test:/\.(js|jsx)$/,
      exclude:/node_modules/,
      use:{
        loader:"bable-loader"
      }
    },
    {
      test:/\.(png|jpg|gif)$/,
      use:[
        {
          loader:'url-loader',
          options:{
            limit:8192
          }
        }
      ]
    }
    ]
  }
}