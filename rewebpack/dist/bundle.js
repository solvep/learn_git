 (function(modules) { // webpackBootstrap
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
({

 "./node_modules/webpack/buildin/module.js":
 (function(module, exports) {
eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");
}),
 "./src/a.js":
 (function(module, exports, __webpack_require__) {
eval("let b = __webpack_require__(/*! ./base/b.js */ \"./src/base/b.js\");\r\nmodule.exports = 'a' + b\n\n//# sourceURL=webpack:///./src/a.js?");
 }),
 "./src/base/b.js":
 (function(module, exports, __webpack_require__) {
eval("/* WEBPACK VAR INJECTION */(function(module) {module.export = 'b'\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/base/b.js?");
 }),
"./src/index.js":
(function(module, exports, __webpack_require__) {
eval("let str = __webpack_require__(/*! ./a.js */ \"./src/a.js\")\r\nconsole.log(str)\n\n//# sourceURL=webpack:///./src/index.js?");
})});