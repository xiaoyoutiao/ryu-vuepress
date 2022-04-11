(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{350:function(t,s,a){t.exports=a.p+"assets/img/webpack-01.b5444fcd.png"},351:function(t,s,a){t.exports=a.p+"assets/img/webpack-02.0a2a52f3.png"},352:function(t,s,a){t.exports=a.p+"assets/img/webpack-03.4f2eec50.png"},353:function(t,s,a){t.exports=a.p+"assets/img/webpack-04.7a579488.png"},354:function(t,s,a){t.exports=a.p+"assets/img/webpack-05.ba3dc3b7.png"},355:function(t,s,a){t.exports=a.p+"assets/img/webpack-06.977292c3.png"},414:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"webpack打包代码解析"}},[t._v("webpack打包代码解析")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("strong",[t._v("webpack")]),t._v(" 版本: 5.65.0")])]),t._v(" "),n("h3",{attrs:{id:"webpack-build代码分析"}},[t._v("webpack build代码分析")]),t._v(" "),n("p",[n("img",{attrs:{src:a(350),alt:"代码结构"}})]),t._v(" "),n("p",[t._v("首先项目代码如上所示, 只有一个app.js入口文件, 代码使用控制台打印了一段文本, 然后build后输出了dist文件夹, 里面有一个bundle.js以及对应的sourcemap文件, 下面先忽略.map文件, 看下bundle.js文件代码")]),t._v(" "),n("h3",{attrs:{id:"bundle-js代码如下所示"}},[t._v("bundle.js代码如下所示")]),t._v(" "),n("p",[n("img",{attrs:{src:a(351),alt:"bundle.js代码"}})]),t._v(" "),n("p",[t._v("上面的代码只有一个"),n("code",[t._v("自执行函数(IIFE)")]),t._v("和最底部的sourcemap对应链接, 然后看下IIFE里面的代码, 可以看到入口文件对应的代码, 以及一个未使用到的"),n("code",[t._v("__webpack_exports__")]),t._v("对象, 这就是一个最简单的webpack输出的代码了")]),t._v(" "),n("p",[t._v("接下来添加一个"),n("code",[t._v("utils")]),t._v("模块文件, 在"),n("code",[t._v("app.js")]),t._v("中引入"),n("code",[t._v("utils/index.js")]),t._v(", 看下有了依赖模块后的bundle.js代码有什么变化")]),t._v(" "),n("p",[n("img",{attrs:{src:a(352),alt:"bundle.js代码"}})]),t._v(" "),n("h3",{attrs:{id:"输出的bundle-js代码如下"}},[t._v("输出的bundle.js代码如下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(353),alt:"bundle.js代码"}})]),t._v(" "),n("p",[t._v("可以看到代码行数多了很多, 然后app.js的代码在"),n("code",[t._v("83行到94")]),t._v("行之间, 其中跟源码的不用之处在于多了"),n("code",[t._v("87")]),t._v("行"),n("code",[t._v("__webpack_require__.r(__webpack_exports__);")]),t._v(", 并且模块导入语句也由"),n("code",[t._v('import ... from "..."')]),t._v("变为一个"),n("code",[t._v("__webpack_require__")]),t._v("函数, 这其中最关键的的输出, 就在于"),n("code",[t._v("__webpack_require__")]),t._v("这个函数了, 那么我们看下, "),n("code",[t._v("__webpack_require__")]),t._v("函数是如何定义的")]),t._v(" "),n("h3",{attrs:{id:"webpack-require-函数代码如下"}},[t._v("__webpack_require__函数代码如下")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/************************************************************************/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The module cache")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" __webpack_module_cache__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The require function")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__webpack_require__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("moduleId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if module is in cache")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cachedModule "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __webpack_module_cache__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("moduleId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cachedModule "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cachedModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a new module (and put it into the cache)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" module "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __webpack_module_cache__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("moduleId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no module.id needed")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no module.loaded needed")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exports")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Execute the module function")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t__webpack_modules__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("moduleId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the exports of the module")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("从代码和注释可以看到, "),n("code",[t._v("__webpack_require__")]),t._v("函数接收一个入参moduleId, 然后主要做了两件事")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建一个新的模块对象"),n("code",[t._v("module")]),t._v(", 并且把这个"),n("code",[t._v("module")]),t._v("根据moduleId绑定到缓存对象"),n("code",[t._v("__webpack_module_cache__")]),t._v("中, 下次再调用"),n("code",[t._v("__webpack_require__")]),t._v("时, 可以直接从缓存中返回这个模块对象")])]),t._v(" "),n("li",[n("p",[t._v("根据"),n("code",[t._v("moduleId")]),t._v("在"),n("code",[t._v("__webpack_modules__")]),t._v("对象中获取到对应的执行函数, 然后将"),n("code",[t._v("module, module.exports, __webpack_require__")]),t._v("作为参数, 执行函数, 然后返回"),n("code",[t._v("module.exports")])])])]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("__webpack_require__")]),t._v("代码里又用到了一个新的对象"),n("code",[t._v("__webpack_modules__")]),t._v(", 这个对象其实就是我们代码中的依赖声明了, 其中键为模块路径, 值为模块的执行函数, 这个对象是由"),n("code",[t._v("webpack")]),t._v("自动生成的")]),t._v(" "),n("h4",{attrs:{id:"webpack-modules-对象声明如下"}},[t._v("__webpack_modules__对象声明如下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(354),alt:"bundle.js代码"}})]),t._v(" "),n("p",[t._v("可以看到, "),n("code",[t._v("app.js")]),t._v("依赖的"),n("code",[t._v("utils")]),t._v("模块代码,就在"),n("code",[t._v("__webpack_modules__")]),t._v("对象里面")]),t._v(" "),n("h2",{attrs:{id:"webpack-require-函数静态方法"}},[n("code",[t._v("__webpack_require__")]),t._v("函数静态方法")]),t._v(" "),n("p",[n("code",[t._v("__webpack_require__")]),t._v("函数除了缓存、获取模块对象之外， 还提供了一些静态方法")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/************************************************************************/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpack/runtime/define property getters */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define getter functions for harmony exports")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("d")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" definition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" definition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("o")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("definition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("o")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t\t\tObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enumerable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" definition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpack/runtime/hasOwnProperty shorthand */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("o")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpack/runtime/make namespace object */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define __esModule on exports")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("r")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Symbol "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toStringTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t\tObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toStringTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Module'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t\tObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__esModule'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/******/")]),t._v(" \t\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/************************************************************************/")]),t._v("\n")])])]),n("h3",{attrs:{id:"处理完注释和自执行函数-代码如下所示"}},[t._v("处理完注释和自执行函数, 代码如下所示")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("d")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" definition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" definition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("o")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("definition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("o")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enumerable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" definition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("o")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n__webpack_require__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("r")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Symbol "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toStringTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toStringTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Module'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__esModule'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("各个方法的用途")]),t._v(" "),n("ol",[n("li",[n("p",[n("code",[t._v("__webpack_require__.d")]),t._v(" 遍历一个对象的属性, 赋值给另外一个对象 , 用于模块内部导出变量的定义, 如果模块内部没有导出变量, 则不需要使用这个方法\n"),n("img",{attrs:{src:a(355),alt:"bundle.js代码"}})])]),t._v(" "),n("li",[n("p",[n("code",[t._v("__webpack_require__.o")]),t._v(" 检查对象自身是否有指定的属性")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("__webpack_require__.r")]),t._v(" 给exports对象设置"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag"}},[t._v("Symbol.toStringTag")]),t._v("属性为"),n("code",[t._v("Module")]),t._v("并且设置"),n("code",[t._v("__esModule")]),t._v("属性为true, 目的是为了指定导出的模块类型, 这里的相关知识后面再讲")])])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),n("p",[t._v("在本篇文章中, 分析了webpack打包后的代码结构, 其中最主要的是"),n("code",[t._v("__webpack_require__")]),t._v("函数, 这个函数用于个根据moduleId获取模块对象, 并且所有依赖执行函数集保存在全局的"),n("code",[t._v("__webpack_modules__")]),t._v("对象当中, 在执行模块代码时, 会调用"),n("code",[t._v("__webpack_require__")]),t._v("函数定于的静态方法, 在模块内部导出并且标记导出模块类型。这些就是webpack输出代码中的依赖导入部分了，但是本篇文章只是对简单的js代码依赖部分进行分析， 还有其他部分没涉及到，比如"),n("code",[t._v("懒加载")]),t._v("， "),n("code",[t._v("按需加载")]),t._v("，"),n("code",[t._v("模块类型解析(cmj和esm如何区分)")]),t._v("，"),n("code",[t._v("非js模块依赖引用")]),t._v("等等事如何处理的, 希望在后续的文章中能够深入了解。")]),t._v(" "),n("h2",{attrs:{id:"参考"}},[t._v("参考")]),t._v(" "),n("div",{attrs:{id:"refer-anchor-1"}}),t._v(" "),n("ul",[n("li",[t._v("[1] "),n("a",{attrs:{href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack官方文档"),n("OutboundLink")],1)])]),t._v(" "),n("div",{attrs:{id:"refer-anchor-2"}}),t._v(" "),n("ul",[n("li",[t._v("[2] "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag",target:"_blank",rel:"noopener noreferrer"}},[t._v("[MDN] Symbol.toStringTag"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);