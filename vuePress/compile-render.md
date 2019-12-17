# Vue的组件编译

## 编译和渲染

​	我们上一篇文章，聊了关于Vue的响应式数据的源码实现，接下来聊一聊，Vue的组件编译，Vue的组件编译，有两个步骤分别是：

+ 编译（Compiler）：把Template模板转化问Render Function，执行环境包括**服务器**和**浏览器**
+ 渲染（Render）：把Render Function执行得到Vnode，Vnode渲染成为真实DOM节点。执行环境只有**浏览器**

另外一点值得注意的就是，如果我们在使用Vue Cli创建Vue项目的时候，会有一个`vue build`选项，这个选项会问你是需要创建：

+ Runtime+Compiler：32kb min+ gzip，支持网页编译`template`字符串。
+ Runtime-only：22kb min+gzip，所有`template`以`.vue`文件的形式，在`webpack build`的阶段编译成`rende`r函数

两个不同的版本的核心区别就是**编译**阶段的时机，只有`Runtime+Compiler`版本才会使用`Template`参数，并且是在`render`函数不存在的时候，`Runtime-only`的编译是靠`webpack` 的 `vue-loader`，而不是靠Vue本身的编译体系，也就是说，使用`Runtime-only`的时候，编译已经完成，所有的`.vue`文件已经变成了对应的`render`函数。默认情况下，我们只需要使用`Runtime-only`版本就可以了。

## Virtual DOM

​		对比于`javascript`对象，原生`DOM`对象是非常庞大的。一个简单的`<div>`节点就拥有246个属性，如果直接操作`DOM`，开销是要比操作`javascript`对象大很多的。所以这也是为什么Vue需要有一个`Virtual DOM`，但是`Virtual DOM`并不是`Vue`特有的概念，很多前端框架，比如`React`，都使用了`Virtual DOM`这个概念。

​		另一个需要使用`Virtual DOM`的原因是，我们可以把`Virtual DOM`视为一个数据蓝图，当我们需要修改某个数据的时候，其实可以先对比一下蓝图，然后再修改**差异**部分，这样也把`DOM`操作的开销降低不少。

## 渲染步骤与生命周期

### 渲染步骤


1. Template-->Render Function
   + `.vue`文件就是`Template`，是在`webpack`编译阶段转为`Render Function`
2. Render Function-->Vnode
   + `render function`的执行，就是在`updateComponent`函数执行阶段执行的（响应式原理里面提到了）
   + 如果我们手动写了`Render Function`，其实本质上就是直接跳过了编译阶段（第一步），直接使用我们自定义的`Render Function`开始第二步的渲染阶段。
3. Vnode-->Browser
   + Vnode最后更新到Browser的时候，是差异更新的，不是全量替换

### 生命周期中的渲染

1. 初始化事件和生命周期
```js
   // core/instance/init.js 
   initLifecycle(vm)				//执行初始化生命周期
   initEvents(vm) 					//执行初始化事件
```
   + 执行钩子函数**beforeCreate**

2. 初始化数据
```js
   // core/instance/init.js 
   initInjections(vm) 	//在响应式数据初始化之前处理注入数据
   initState(vm)				//初始化响应式数据（data，prop，method，watch）
```

   + 执行钩子函数**created**

3. Template-->render
```js 
vm.$mount(vm.$options.el)   	//Runtime+Compiler版本在这里处理template，变为render函数
webpack compile								//Runtime only版本webpack直接编译成render函数

Vue.prototype.$mount = function (									
    el?: string | Element,
  hydrating?: boolean
  ): Component {
    el = el && inBrowser ? query(el) : undefined
    return mountComponent(this, el, hydrating)							//两个版本都在这里接受render函数
}
  
```
+ 执行钩子函数**beforeMount**
+ 这里需要注意一下，如果是Runtime+Compiler版本的vue，会进入两次$mount函数，
     + 第一次执行`$mount`是处理**Template转化为render函数**，代码在`/src/platforms/web/entry-runtime-with-compiler.js`中，之后通过`return mount.call(this, el, hydrating)`会再执行一次`$mount`函数
     + 第二次执行`$mount`就是上面这个`mountComponent`函数的执行，代码在`/src/platforms/web/runtime/index.js`里面。然后执行`mountComponent`函数来触发组件挂载

4. Render-->VNode-->Dom
```js   
   updateComponent = () => {
     vm._update(vm._render(), hydrating)
   }
```

   + 执行钩子函数**mounted**
   + PS：这是响应式数据更新的**核心方法**，可以查看[响应式实现](./reactive-in-vue.md)

5. 完成一次数据挂载的所有流程（如果数据再有更新，就是直接触发第四步了）

## Render函数与响应式

这个时候我们再看一下刚刚的步骤四，有没有突然意识到，`vm._render()`和响应式实现似乎是有关系的？

![示意图](https://tva1.sinaimg.cn/large/006tNbRwgy1g9zkc71e41j31d80pcgpe.jpg)

我们看看这张图（来自`www.vuemastery.com`）我们上一回响应式里面，并没有非常清楚的提到，`render watcher`是怎么触发数据响应式的（还记得`render watch`的渲染函数就是`updateComponent`么？），根据现在我们对`render`函数的理解，就比较容易懂了

1. 首先先通过Template-->Render转化过程，每个Vue组件都自带了一个`render`函数，看一下我们这个demo

```vue
<!-- home.vue -->
<template>
    <div id="app">
        <span>{{obj.a}}</span>
        <button @click="setObj">setObj</button>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data: () => {
            return {
                obj: {
                    a: 1,
                }
            }
        },
        methods: {
            setObj: function () {
                this.obj.a = 2;
            }
        },
        watch: {}
    }
</script>
```

2. 这个`home.vue`将会编译获得以下这么一个render函数，

```js
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c("span", [_vm._v(_vm._s(_vm.obj.a))]),					//注意这里的obj.a，就是我定义的
    _c("button", { on: { click: _vm.setObj } }, [_vm._v("setObj")])
  ])
}
```

3. 当我们执行`vm._render()`的时候，就是在执行上面这个`render`函数，所以在这个时候，我们就访问到了`vm.obj.a`在这个时候完成了数据的访问，从而实现了`dep.depend`的触发。



## JSX支持

在使用[https://github.com/vuejs/babel-preset-vue](https://github.com/vuejs/babel-preset-vue)这个插件的时候，可以支持直接JSX的写法：

```js
render(h) {
    return (
        <div id="people" class="sideBar">Gregg and Chase</div>
    )
},
```

但是不建议这么写，不如直接把里面的内容作为`.vue`文件来引用的直观，而且IDE默认对这种写法，是报错的，排版也是乱的。