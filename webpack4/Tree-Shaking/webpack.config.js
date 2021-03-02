
module.exports = {
  mode: 'none',
  entry: './src/main',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.\js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }]
            ]
          }
        }
      }

    ]
  },
  optimization: {
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    // concatenateModules: true,
    // minimize: true,

  }
}