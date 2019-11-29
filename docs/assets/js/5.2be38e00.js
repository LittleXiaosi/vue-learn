(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速理解vue的响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速理解vue的响应式"}},[t._v("#")]),t._v(" 快速理解Vue的响应式")]),t._v(" "),s("blockquote",[s("p",[t._v("“年级轻轻干点啥不好，非要学人做前端，自己挖坑自己爬”——xiaosiyan")])]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("​\t\tVue已经是业内用的比较多框架，本身特点之一就是响应式的数据处理，在用框架的时候只需要记住data内的数据变化会引起UI变化，但是实现原理的话，还是挺有意思。所以暂且记录一下关于响应式的理解，避免一些坑。")]),t._v(" "),s("h2",{attrs:{id:"先讲个小故事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先讲个小故事"}},[t._v("#")]),t._v(" 先讲个小故事")]),t._v(" "),s("p",[t._v("在一个部门里面有若干"),s("strong",[t._v("程序员")]),t._v("，也有若干的"),s("strong",[t._v("需求")]),t._v("，在做需求之前，所有程序员都会去tapd上看一下有哪些需求是需要自己做的，并且给自己安排一个"),s("strong",[t._v("排期表")]),t._v("，里面有每个项目的上线时间预估。然后开始做需求的时候，如果有任何一个需求开发"),s("strong",[t._v("延期")]),t._v("了，就都需要重新安排自己的排期表，然后会导致所有涉及到自己的需求项目，"),s("strong",[t._v("上线")]),t._v("时间都要重新预估。这就是个响应式的延期呀(￣▽￣)~*")]),t._v(" "),s("p",[t._v("嗯，响应式就是这么神奇，有一个需求小小的延期，你对接的所有的产品经理都会来问你怎么肥事 (`Д´*)9")]),t._v(" "),s("h2",{attrs:{id:"枯燥的简易代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枯燥的简易代码"}},[t._v("#")]),t._v(" 枯燥的简易代码")]),t._v(" "),s("p",[t._v("这是来自Vue官网的对于响应式的核心代码的示例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quantity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is exactly the same Dep class")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only if there is a target & it's not already subscribed")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Go through each of our data properties")]),t._v("\n    Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" internalValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Each property gets a dependency instance")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dep "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      \n      Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("depend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- Remember the target we're running")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" internalValue\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          internalValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n          dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- Re-run stored functions")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// My watcher no longer calls dep.depend,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// since that gets called from inside our get method.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("myFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myFunc\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quantity\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("​\t\t在这个Demo中，如果我们改变了"),s("code",[t._v("data.price")]),t._v("或者"),s("code",[t._v("data.quantity")]),t._v("，"),s("code",[t._v("data.total")]),t._v("都是会改变的，这里的"),s("code",[t._v("data.total")]),t._v("就是一个响应式数据。所以一个响应式数据需要做到的其实就是"),s("strong",[t._v("对于存在依赖关系的数据（data.total），在被依赖的数据（data.price或data.quantity）更新之后，依赖数据（data.total）可以自动重新计算，即响应式数据")])]),t._v(" "),s("p",[t._v("​\t\t其实这一段代码并不长，总结起来，有以下几个部分")]),t._v(" "),s("ol",[s("li",[t._v("Dep class：依赖类，用来初始化一个依赖对象，依赖对象的作用是管理数据更新，所以有两个方法\n"),s("ul",[s("li",[t._v("depend：收集依赖，通过这个方法来告知dep，什么情况下需要触发数据重新计算")]),t._v(" "),s("li",[t._v("notify：执行数据的重新计算（需要注意的是，依赖可能多个，重新计算也可能多次）")])])]),t._v(" "),s("li",[t._v("watcher：数据监听器，本质上是一个依赖关系的描述，也就是说"),s("strong",[t._v("dep")]),t._v("需要收集的其实就是"),s("strong",[t._v("watcher")]),t._v("，有了"),s("strong",[t._v("watcher")]),t._v("之后，就知道数据之间的关系，比如上面的Demo就是这个"),s("strong",[t._v("watcher")]),t._v("描述了"),s("code",[t._v("data.total")]),t._v("的值是由"),s("code",[t._v("data.price * data.quantity")]),t._v("得来。所以"),s("code",[t._v("data.total")]),t._v("对"),s("code",[t._v("data.price")]),t._v("和"),s("code",[t._v("data.quantity")]),t._v("是存在依赖关系。如果"),s("code",[t._v("data.price")]),t._v("或者"),s("code",[t._v("data.quantity")]),t._v("数据变化，"),s("code",[t._v("data.total")]),t._v("需要重新计算。")]),t._v(" "),s("li",[t._v("defineProperty：数据响应式初始化（或者说数据钩子化），有了dep和watcher之后，数据就知道了应该要怎么处理重新计算，但是还不知道应该什么时候执行。defineProperty就是告诉数据应该在什么时候执行\n"),s("ul",[s("li",[t._v("get："),s("strong",[t._v("被依赖数据")]),t._v("（data.price ， data.quantity）被访问的时候，就收集依赖，凡是依赖了当前数据的数据（data.total），在当前数据改变的时候，都要重新计算。")]),t._v(" "),s("li",[t._v("set："),s("strong",[t._v("被依赖数据")]),t._v("（data.price ， data.quantity）在重新被赋值的时候，就把之前收集到的所有需要触发重新计算的地方（watcher）统统重新计算一次。")])])])]),t._v(" "),s("p",[t._v("所以执行一次watcher初始化之后，第一次访问到"),s("code",[t._v("data.price")]),t._v("和"),s("code",[t._v("data.quantity")]),t._v("的时候，就已经在"),s("code",[t._v("data.price")]),t._v("和"),s("code",[t._v("data.quantity")]),t._v("上建立了对"),s("code",[t._v("data.total")]),t._v("的依赖 ，之后再改变"),s("code",[t._v("data.price")]),t._v("和"),s("code",[t._v("data.quantity")]),t._v("都会触发"),s("code",[t._v("data.total")]),t._v("的重新计算。")]),t._v(" "),s("p",[t._v("不过这里只是核心代码的原理展示，本身Vue还需要对响应式数据做很多的额外处理，初始化过程比这里复杂很多，尤其是复杂的数据对象需要很多深度遍历去给每个属性增加setter和getter，不过弄明白了原理，理解再去看其他大牛的源码分析，就简单很多啦~")]),t._v(" "),s("h2",{attrs:{id:"深入结合一下现实例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入结合一下现实例子"}},[t._v("#")]),t._v(" 深入结合一下现实例子")]),t._v(" "),s("p",[t._v("所以，回到我们刚刚举的例子，每一个程序员就是"),s("strong",[t._v("被依赖的数据")]),t._v("，而程序员自己给自己的排期表就是自己的"),s("strong",[t._v("dep实例")]),t._v("，自己的排期表里面包括了若干个需求的上线时间预估，一个需求延期就是"),s("strong",[t._v("被依赖的数据变化")]),t._v("，每一个需求的上线时间预估就是一个"),s("strong",[t._v("watcher")]),t._v("，而每个项目的上线时间就是"),s("strong",[t._v("响应式数据")]),t._v("，所以当一个程序员排期变化（延期），就导致所有涉及到的需求的上线时间需要重新预估，这就是响应式的计算了。")]),t._v(" "),s("p",[t._v("嗯，这么一分析，是不是觉得项目要是能按时上线，才是小概率事件呢o(TωT)o")])])}),[],!1,null,null,null);a.default=e.exports}}]);