(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue的组件编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的组件编译"}},[t._v("#")]),t._v(" Vue的组件编译")]),t._v(" "),a("h2",{attrs:{id:"编译和渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译和渲染"}},[t._v("#")]),t._v(" 编译和渲染")]),t._v(" "),a("p",[t._v("​\t我们上一篇文章，聊了关于Vue的响应式数据的源码实现，接下来聊一聊，Vue的组件编译，Vue的组件编译，有两个步骤分别是：")]),t._v(" "),a("ul",[a("li",[t._v("编译（Compiler）：把Template模板转化问Render Function，执行环境包括"),a("strong",[t._v("服务器")]),t._v("和"),a("strong",[t._v("浏览器")])]),t._v(" "),a("li",[t._v("渲染（Render）：把Render Function执行得到Vnode，Vnode渲染成为真实DOM节点。执行环境只有"),a("strong",[t._v("浏览器")])])]),t._v(" "),a("p",[t._v("另外一点值得注意的就是，如果我们在使用Vue Cli创建Vue项目的时候，会有一个"),a("code",[t._v("vue build")]),t._v("选项，这个选项会问你是需要创建：")]),t._v(" "),a("ul",[a("li",[t._v("Runtime+Compiler：32kb min+ gzip，支持网页编译"),a("code",[t._v("template")]),t._v("字符串。")]),t._v(" "),a("li",[t._v("Runtime-only：22kb min+gzip，所有"),a("code",[t._v("template")]),t._v("以"),a("code",[t._v(".vue")]),t._v("文件的形式，在"),a("code",[t._v("webpack build")]),t._v("的阶段编译成"),a("code",[t._v("rende")]),t._v("r函数")])]),t._v(" "),a("p",[t._v("两个不同的版本的核心区别就是"),a("strong",[t._v("编译")]),t._v("阶段的时机，只有"),a("code",[t._v("Runtime+Compiler")]),t._v("版本才会使用"),a("code",[t._v("Template")]),t._v("参数，并且是在"),a("code",[t._v("render")]),t._v("函数不存在的时候，"),a("code",[t._v("Runtime-only")]),t._v("的编译是靠"),a("code",[t._v("webpack")]),t._v(" 的 "),a("code",[t._v("vue-loader")]),t._v("，而不是靠Vue本身的编译体系，也就是说，使用"),a("code",[t._v("Runtime-only")]),t._v("的时候，编译已经完成，所有的"),a("code",[t._v(".vue")]),t._v("文件已经变成了对应的"),a("code",[t._v("render")]),t._v("函数。默认情况下，我们只需要使用"),a("code",[t._v("Runtime-only")]),t._v("版本就可以了。")]),t._v(" "),a("h2",{attrs:{id:"virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),a("p",[t._v("​\t\t对比于"),a("code",[t._v("javascript")]),t._v("对象，原生"),a("code",[t._v("DOM")]),t._v("对象是非常庞大的。一个简单的"),a("code",[t._v("<div>")]),t._v("节点就拥有246个属性，如果直接操作"),a("code",[t._v("DOM")]),t._v("，开销是要比操作"),a("code",[t._v("javascript")]),t._v("对象大很多的。所以这也是为什么Vue需要有一个"),a("code",[t._v("Virtual DOM")]),t._v("，但是"),a("code",[t._v("Virtual DOM")]),t._v("并不是"),a("code",[t._v("Vue")]),t._v("特有的概念，很多前端框架，比如"),a("code",[t._v("React")]),t._v("，都使用了"),a("code",[t._v("Virtual DOM")]),t._v("这个概念。")]),t._v(" "),a("p",[t._v("​\t\t另一个需要使用"),a("code",[t._v("Virtual DOM")]),t._v("的原因是，我们可以把"),a("code",[t._v("Virtual DOM")]),t._v("视为一个数据蓝图，当我们需要修改某个数据的时候，其实可以先对比一下蓝图，然后再修改"),a("strong",[t._v("差异")]),t._v("部分，这样也把"),a("code",[t._v("DOM")]),t._v("操作的开销降低不少。")]),t._v(" "),a("h2",{attrs:{id:"渲染步骤与生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染步骤与生命周期"}},[t._v("#")]),t._v(" 渲染步骤与生命周期")]),t._v(" "),a("h3",{attrs:{id:"渲染步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染步骤"}},[t._v("#")]),t._v(" 渲染步骤")]),t._v(" "),a("ol",[a("li",[t._v("Template--\x3eRender Function\n"),a("ul",[a("li",[a("code",[t._v(".vue")]),t._v("文件就是"),a("code",[t._v("Template")]),t._v("，是在"),a("code",[t._v("webpack")]),t._v("编译阶段转为"),a("code",[t._v("Render Function")])])])]),t._v(" "),a("li",[t._v("Render Function--\x3eVnode\n"),a("ul",[a("li",[a("code",[t._v("render function")]),t._v("的执行，就是在"),a("code",[t._v("updateComponent")]),t._v("函数执行阶段执行的（响应式原理里面提到了）")]),t._v(" "),a("li",[t._v("如果我们手动写了"),a("code",[t._v("Render Function")]),t._v("，其实本质上就是直接跳过了编译阶段（第一步），直接使用我们自定义的"),a("code",[t._v("Render Function")]),t._v("开始第二步的渲染阶段。")])])]),t._v(" "),a("li",[t._v("Vnode--\x3eBrowser\n"),a("ul",[a("li",[t._v("Vnode最后更新到Browser的时候，是差异更新的，不是全量替换")])])])]),t._v(" "),a("h3",{attrs:{id:"生命周期中的渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期中的渲染"}},[t._v("#")]),t._v(" 生命周期中的渲染")]),t._v(" "),a("ol",[a("li",[t._v("初始化事件和生命周期")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// core/instance/init.js ")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行初始化生命周期")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行初始化事件")]),t._v("\n")])])]),a("ul",[a("li",[t._v("执行钩子函数"),a("strong",[t._v("beforeCreate")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("初始化数据")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// core/instance/init.js ")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在响应式数据初始化之前处理注入数据")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化响应式数据（data，prop，method，watch）")]),t._v("\n")])])]),a("ul",[a("li",[t._v("执行钩子函数"),a("strong",[t._v("created")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Template--\x3erender")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Runtime+Compiler版本在这里处理template，变为render函数")]),t._v("\nwebpack compile\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Runtime only版本webpack直接编译成render函数")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$mount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\t\t\t\t\t\t\t\t\t\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hydrating"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" inBrowser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mountComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//两个版本都在这里接受render函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])]),a("ul",[a("li",[t._v("执行钩子函数"),a("strong",[t._v("beforeMount")])]),t._v(" "),a("li",[t._v("这里需要注意一下，如果是Runtime+Compiler版本的vue，会进入两次$mount函数，\n"),a("ul",[a("li",[t._v("第一次执行"),a("code",[t._v("$mount")]),t._v("是处理"),a("strong",[t._v("Template转化为render函数")]),t._v("，代码在"),a("code",[t._v("/src/platforms/web/entry-runtime-with-compiler.js")]),t._v("中，之后通过"),a("code",[t._v("return mount.call(this, el, hydrating)")]),t._v("会再执行一次"),a("code",[t._v("$mount")]),t._v("函数")]),t._v(" "),a("li",[t._v("第二次执行"),a("code",[t._v("$mount")]),t._v("就是上面这个"),a("code",[t._v("mountComponent")]),t._v("函数的执行，代码在"),a("code",[t._v("/src/platforms/web/runtime/index.js")]),t._v("里面。然后执行"),a("code",[t._v("mountComponent")]),t._v("函数来触发组件挂载")])])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Render--\x3eVNode--\x3eDom")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("执行钩子函数"),a("strong",[t._v("mounted")])]),t._v(" "),a("li",[t._v("PS：这是响应式数据更新的"),a("strong",[t._v("核心方法")]),t._v("，可以查看"),a("router-link",{attrs:{to:"/reactive-in-vue.html"}},[t._v("响应式实现")])],1)]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("完成一次数据挂载的所有流程（如果数据再有更新，就是直接触发第四步了）")])]),t._v(" "),a("h2",{attrs:{id:"render函数与响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render函数与响应式"}},[t._v("#")]),t._v(" Render函数与响应式")]),t._v(" "),a("p",[t._v("这个时候我们再看一下刚刚的步骤四，有没有突然意识到，"),a("code",[t._v("vm._render()")]),t._v("和响应式实现似乎是有关系的？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006tNbRwgy1g9zkc71e41j31d80pcgpe.jpg",alt:"示意图"}})]),t._v(" "),a("p",[t._v("我们看看这张图（来自"),a("code",[t._v("www.vuemastery.com")]),t._v("）我们上一回响应式里面，并没有非常清楚的提到，"),a("code",[t._v("render watcher")]),t._v("是怎么触发数据响应式的（还记得"),a("code",[t._v("render watch")]),t._v("的渲染函数就是"),a("code",[t._v("updateComponent")]),t._v("么？），根据现在我们对"),a("code",[t._v("render")]),t._v("函数的理解，就比较容易懂了")]),t._v(" "),a("ol",[a("li",[t._v("首先先通过Template--\x3eRender转化过程，每个Vue组件都自带了一个"),a("code",[t._v("render")]),t._v("函数，看一下我们这个demo")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- home.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{obj.a}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("setObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("setObj"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setObj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("这个"),a("code",[t._v("home.vue")]),t._v("将会编译获得以下这么一个render函数，")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" _h\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意这里的obj.a，就是我定义的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setObj "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setObj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("当我们执行"),a("code",[t._v("vm._render()")]),t._v("的时候，就是在执行上面这个"),a("code",[t._v("render")]),t._v("函数，所以在这个时候，我们就访问到了"),a("code",[t._v("vm.obj.a")]),t._v("在这个时候完成了数据的访问，从而实现了"),a("code",[t._v("dep.depend")]),t._v("的触发。")])]),t._v(" "),a("h2",{attrs:{id:"jsx支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx支持"}},[t._v("#")]),t._v(" JSX支持")]),t._v(" "),a("p",[t._v("在使用"),a("a",{attrs:{href:"https://github.com/vuejs/babel-preset-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/babel-preset-vue"),a("OutboundLink")],1),t._v("这个插件的时候，可以支持直接JSX的写法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sideBar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Gregg and Chase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("但是不建议这么写，不如直接把里面的内容作为"),a("code",[t._v(".vue")]),t._v("文件来引用的直观，而且IDE默认对这种写法，是报错的，排版也是乱的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);