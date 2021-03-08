const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comment-plugin')
module.exports ={
  mode: 'none',
  entry : './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack plugin sample',
      meta: {
        viewport: 'width=device-width'
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'about.html'
    }),
    new CopyWebpackPlugin({
      patterns: ['public'] // 需要拷贝的目录或者路径通配符
    }),
    new RemoveCommentsPlugin()
  ]
}