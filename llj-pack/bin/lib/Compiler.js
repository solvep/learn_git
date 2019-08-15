let fs = require("fs")
let path = require("path")

// babylon 主要就是把源码 转换成AST
let babylon= reuqire('babylon')
// @babel/traverse
let traverse = require('@babel/traverse').default;
let t = require('@babel/types')
// @babel/types
let generator = require('@babel/generator').default;
// @babel/generator
class Compiler{
  constructor(config){
    // entry output
    this.config = config
    // 需要保存入口文件的路径
    this.entryId; // './src/index.js'
    // 需要保存所有的模块以来
    this.modules = {};
    this.entry = config.entry; // 入口路径
    // 工作路径
    this.root = process.cwd()
  }
  getSource(modulePath){
    let content = fs.readFileSync(modulePath,'utf-8');
    return content;
  }
  parse(source,parentPath){ // AST 解析语法树
    let ast = babylon.parse(source);
    let dependencies = [];//依赖数组；
    traverse(ast,{
      CallExpression(p){
        let node = p.node;
        if(node.callee.name === 'require'){
          node.callee.name = __webpack_require__;
          let moduleName = node.arguments[0].value; // 取到引用名字
          moduleName = moduleName + (path.extname(moduleName)?'':".js");
          path.join(parentPath,moduleName);'src/a.js'
        }
      }
    })
  }
  // 构建模块
  buildModule(modulePath,isEntry){
    // 拿到模块的内容
    let source = this.getSource(modulePath)
    // 模块id modulePath = modulePath - this.root
    let moduleName = './'+ path.relative(this.root,modulePath)
    if(isEntry){
      this.entryId = moduleName;// 保存入口的名字
    }
    // 解析需要把source源码进行改造 返回一个依赖列表
    this.parse(source,path.dirname(moduleName)); // ./src
    // 把相对路径和模块中的内容对应起来
    this.modules[moduleName] = sourceCode;
  }
  emitFile(){ // 发射文件

  }
  run(){
    // 执行 并且创建模块的依赖关系
    this.buildModule(path.resolve(this.root,this.entry),true)

    // 发射一个文件 打包后的文件
    this.emitFile();
  }
}
module.exports = Compiler;