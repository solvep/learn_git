class RemoveCommentsPlugin {
  // constructor(){

  // }
  apply(compiler) {
    console.log('rmyplugin 启动')
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      /* ... */
      // console.log('compilation.assets', compilation.assets)
      for(const name in compilation.assets) {
        console.log(name)
      }
    });
  }
}

module.exports=RemoveCommentsPlugin