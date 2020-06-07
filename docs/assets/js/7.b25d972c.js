(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(e,t,a){"use strict";a.r(t);var v=a(0),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react与vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react与vue"}},[e._v("#")]),e._v(" React与Vue")]),e._v(" "),a("h2",{attrs:{id:"初步了解react的各种概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初步了解react的各种概念"}},[e._v("#")]),e._v(" 初步了解React的各种概念")]),e._v(" "),a("h3",{attrs:{id:"jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx"}},[e._v("#")]),e._v(" JSX")]),e._v(" "),a("p",[e._v("React的JSX与Vue中的Template的概念是比较类似的，写法上会有一些差异，")]),e._v(" "),a("ol",[a("li",[e._v("Vue中快速取值使用"),a("code",[e._v("{{}}")]),e._v(" 而在React中则是"),a("code",[e._v("{}")]),e._v("。")]),e._v(" "),a("li",[e._v("命名规范，Vue中的Template属性会与Html保持一致，但是React使用了驼峰命名，更接近于JS语法")]),e._v(" "),a("li",[e._v("创建节点，Vue的createElement与React的基本类似，传递的参数也是比较类似")]),e._v(" "),a("li",[e._v("但是这里面有个区别就是一般来讲，Vue是不会强调JSX这个概念（虽然Vue也需要用到，Vue的Template会尽可能的贴近原生HTML体验，只有在写函数式组件，并且不直接引用.Vue文件的时候才需要这么写）")])]),e._v(" "),a("h3",{attrs:{id:"元素渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素渲染"}},[e._v("#")]),e._v(" 元素渲染")]),e._v(" "),a("ol",[a("li",[e._v("React使用"),a("code",[e._v("ReactDOM.render")]),e._v("函数来进行渲染，而Vue使用"),a("code",[e._v("new Vue")]),e._v("来进行渲染；")]),e._v(" "),a("li",[e._v("React的元素渲染本身不是响应式，Vue本身的元素渲染就已经是响应式了。")])]),e._v(" "),a("h3",{attrs:{id:"组件与props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件与props"}},[e._v("#")]),e._v(" 组件与Props")]),e._v(" "),a("ol",[a("li",[e._v("React的函数式组件返回的是一个React元素，使用的是JSX语法定义。但是Vue的函数式组件返回的是一个Vnode节点（虚拟节点），这个节点其实是一个包含对Dom节点描述信息的JS对象。使用的是JS的语法。")]),e._v(" "),a("li",[e._v("函数式组件定义中，React会将所有接收到的属性都封装在一个对象中作为prop传递，但是Vue只会接受定义了的prop，如果传递了未定义的props，在组件内部是获取不到这个参数的。并且在Vue中，props的名字定义是有保留字段的，即Vue本身的保留字段和HTML的特殊属性，比如class属性，就必须是一个"),a("code",[e._v("{className:boolean}")]),e._v("形态的对象")]),e._v(" "),a("li",[e._v("组件大小写，React会通过组件大小写来区分是不是自定义组件，但是Vue只是通过是否自定义来区分，自定义的组件名称没有严格的格式要求，通常有大小写区分和横线区分两种。")]),e._v(" "),a("li",[e._v("在Vue中，函数式组件只是因为这个组件需要通过一个特定函数来初始化，返回Vnode，但是React中，任何一个返回React 元素（JSX语法）的函数，都是一个组件。")]),e._v(" "),a("li",[e._v("Props，在Vue中，Props必须有明确的定义，包括字段名称和字段类型，在统一位置处理props输入（目前V2.x版本），但是React并没有需要严格校验Props，Props的管理与JS类似，是一种松散的JS对象式管理（"),a("u",[e._v("所以这里会有一个潜在问题，大量的Props需要怎么管理？,多级JSX参数需要知道上一级数据结构，需要怎么管理？因为当前组件的数据来源是上一级组件的数据封装，额外封装的时候怎么知道属性格式？")]),e._v("）")]),e._v(" "),a("li",[e._v("Props修改，React不允许修改Props，Vue的Props也是不允许修改的，这是一致的，Vue只允许修改组件内的Data，Props只能接受参数")])]),e._v(" "),a("h3",{attrs:{id:"state与生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state与生命周期"}},[e._v("#")]),e._v(" State与生命周期")]),e._v(" "),a("ol",[a("li",[e._v("React与Vue在生命周期的核心概念上，差别就在于State和Data的概念，也是Vue的核心——响应式数据的原理。Vue是在数据内部通过给所有数据执行"),a("strong",[e._v("defineProperty")]),e._v("，监控所有数据的set和get，从而达到自动检测数据的目的，Vue的核心引擎处理两部分，一部分是响应式数据，一部分是Vnode渲染为DOM。而React通过区分props和state，用来区分传参和内部数据，自行处理数据更新，React的核心引擎是处理JSX渲染为DOM这么一个过程。")]),e._v(" "),a("li",[e._v("Vue的"),a("code",[e._v("$set")]),e._v("与React的"),a("code",[e._v("setState")]),e._v("，两者都是设置数据更新，但是"),a("code",[e._v("$set")]),e._v("主要是用来处理响应式数据增加"),a("code",[e._v("defineProperty")]),e._v("，React直接修改数据是不触发重新渲染的，但是Vue是可能触发重新渲染的。"),a("code",[e._v("$set")]),e._v("在Vue中算是一个辅助算法，但是"),a("code",[e._v("setState")]),e._v("在React中是一个必备方法")]),e._v(" "),a("li",[e._v("相对而言，React的生命周期是比较短，易于理解的"),a("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"),a("OutboundLink")],1),e._v("，但是Vue的生命周期因为涉及到数据更新和template部分，所以会复杂一些："),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cn.vuejs.org/v2/guide/instance.html#生命周期图示"),a("OutboundLink")],1),e._v(">")]),e._v(" "),a("li",[e._v("重新渲染这一部分，都是设计虚拟dom需要重新生成，这个阶段，React是通过"),a("code",[e._v("setState")]),e._v("来重新触发"),a("code",[e._v("render")]),e._v("函数，这个"),a("code",[e._v("render")]),e._v("函数对于React的使用者是自己编写的组件渲染代码，但是Vue是通过一个渲染"),a("code",[e._v("watcher")]),e._v("（render watcher）这个渲染"),a("code",[e._v("watcher")]),e._v("对于每一个组件都是默认生成的，对于使用者是不可见的黑盒，也不能操控。在这一点上，会导致使用Vue和React有比较大的感受差异。")]),e._v(" "),a("li",[e._v("基于Vue的核心理念是数据驱动，所以要触发重新渲染，只能是数据有改变才行，但是对于React，还有"),a("strong",[e._v("forceUpdate")]),e._v("可以触发强制渲染。")]),e._v(" "),a("li",[e._v("数据更新，React的"),a("code",[e._v("setState")]),e._v("，其实不是同步更新数据，"),a("code",[e._v("setState")]),e._v("需要通过函数式设定，来获取上一次"),a("code",[e._v("setState")]),e._v("的返回值，而Vue的话，数据更新直接交给了响应式数据处理，所以数据更新部分是同步的，只是触发渲染部分再做了额外优化，不是同步渲染。")]),e._v(" "),a("li",[e._v("Vue有一个React没有的概念，Computed，计算过的值，因为Vue的数据计算都是自动触发，所以在监听数据变化的时候，有缓存效率会比较高，Computed得到的就是基于响应式数据计算返回的数据，如果相关数据都不变的话，计算结果也就不会变的，这种时候，这个数据就没必要重新计算了，但是在React，数据计算需要在render中重新处理，所以不存在相关概念。")])]),e._v(" "),a("h3",{attrs:{id:"事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[e._v("#")]),e._v(" 事件处理")]),e._v(" "),a("ol",[a("li",[e._v("对于JSX的处理上，React不会额外处理this指针的相关问题，所以在JSX上面执行函数的时候，就没有了对应的上下文环境了（也是是this指针指向的不是当前组件）这个时候就需要自行绑定this指向，但是在Vue上面，是不需要额外处理this问题，所有在组件内定义的data，prop和methods当前上下文环境都会改为当前组件。不需要考虑this指针变化问题。")]),e._v(" "),a("li",[e._v("JSX的语法中，事件绑定和属性绑定是没有区别的，只是在绑定的属性上是不一致的，但是在Vue的语法中，绑定method和绑定data是不同的绑定方式，能够从template的中直接看出来。")])]),e._v(" "),a("h3",{attrs:{id:"条件渲染，列表-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染，列表-key"}},[e._v("#")]),e._v(" 条件渲染，列表&key")]),e._v(" "),a("ol",[a("li",[e._v("在React中，是直接使用jsx语法来返回不同的React元素控制渲染，但是在Vue中，需要通过指令来控制渲染 ，不能直接操作Vue的Template元素部分。")]),e._v(" "),a("li",[e._v("在列表渲染的时候，React通常使用Map方法来生成新的React元素，但是Vue更多是通过foreach方法，修改本来的元素，这样是个响应式变化。")]),e._v(" "),a("li",[e._v("在列表渲染的时候，React使用index作为key值，是会影响到当数组数据变化时候的状态的，因为渲染的过程是手动的，可能会出现数据与渲染不同步的情况，但是Vue因为不是直接渲染，index作为key值，并不会有多大的影响，只是需要重新计算一次缓存，因为Vue是不能直接渲染的，想要变化UI，必须变化数据，在变化数据的时候是不会出现渲染与数据不同步的情况。")]),e._v(" "),a("li",[e._v("React的JSX是可以嵌套js表达式的，也就是说内部可以包含比较复杂的逻辑，Vue是只允许通过既定的指令（当然指令也可以自定义）来处理渲染层面的问题，Vue在Template的层级复杂度，基本取决于Dom结构的层级，和逻辑关系不大，逻辑会放在script部分单独处理")])]),e._v(" "),a("h3",{attrs:{id:"表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[e._v("#")]),e._v(" 表单")]),e._v(" "),a("ol",[a("li",[e._v("在Vue中，主要通过双向绑定的v-model来处理数据输入输出，这个语法糖会针对当前的DOM类型，内部已经处理了需要绑定的事件，因为使用方法用语法糖包装，所以表现形式是一致的，本质上Vue的所有表单组件，都是React概念里的“受控组件”。React的表单组件事件部分需要自行封装，事件表现每个表单控件是不一致的。但是React有一个推荐的解决方案"),a("a",{attrs:{href:"https://jaredpalmer.com/formik/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jaredpalmer.com/formik/docs/overview"),a("OutboundLink")],1),e._v("来处理表单数据收集以及验证的问题。")]),e._v(" "),a("li",[e._v("Vue本身只是提供了一个v-model的语法糖来处理输入输出的问题，但是并不提供验证相关的内容，只是可以添加修饰符来限制输入，因为数据是同步提供的，大多数情况下是组件库底层封装额外的验证处理")])]),e._v(" "),a("h3",{attrs:{id:"状态提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态提升"}},[e._v("#")]),e._v(" 状态提升")]),e._v(" "),a("ol",[a("li",[e._v("在Vue内，其实没有“状态提升”这么个概念，因为每个Data都是自己的，如果需要使用到上层数据，通常就是通过事件触发修改，或者使用继承数据（但是这是个非响应式数据，使用的比较少）。而因为v-model的封装，有时候也通过v-model解决。而React其实也是这个类似的处理方法，把state放在上级组件中的state管理，通过事件更新数据。")]),e._v(" "),a("li",[e._v("React开发着工具与Vue开发者工具类似，都是可以拿来看当前组件参数，用于定位bug。但是Vue工具会相对复杂一点，还包含事件的监测。")])]),e._v(" "),a("h3",{attrs:{id:"组合与继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合与继承"}},[e._v("#")]),e._v(" 组合与继承")]),e._v(" "),a("ol",[a("li",[e._v("“作用域插槽”这在Vue中是一个比较重要的概念，因为Vue的Prop传递是不能传递组件本身的。只能是js的数据类型，所以在这个时候，如果是动态组件的话，除了使用函数组件以外，另一种方式就是使用作用域插槽（slot）来处理，即“把Vue组件作为参数传递”，而React的jsx语法是没有这个限制的，props可以传递任何东西（jsx的解析器确实牛逼），所以props本身就可以传递组件，就可以作为slot来传递，没有额外限制。")]),e._v(" "),a("li",[e._v("“继承”的概念在React内比较少出现，比较常见的是组件需要继承于"),a("code",[e._v("React.Component")]),e._v("，本身组件相互之间都是引用(import)，很少使用继承的概念，这点和Vue很类似，所有组件都是平级的，都是可以相互引用的，子组件的概念都是人为规定的，从语法上，并没有严格的父子组件的规定。（所以出现递归引用也是可能的）。")]),e._v(" "),a("li")])])}),[],!1,null,null,null);t.default=r.exports}}]);