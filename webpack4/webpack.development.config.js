const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    entry:'./src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist')
      },
    devServer: {
        contentBase: './dist',
        hot: true
      },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:/\.(jsx)$/,
                loader:"babel-loader",
                options: {
                    presets: ['env','react']
                },
                exclude: /node_modules/
            },
            {
                test:/\.(css)$/,
                loader:['style-loader','css-loader'],

            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'
        }),
    ]
}