# Vue的组件挂载

## 挂载过程（mounting）

前面两篇文章中（响应式实现和组件编译）我们都特别提到了有一个很重要的函数：

```js
vm._update(vm._render(), hydrating) 
```

这个函数里面我们之前提到了`vm._render()`干了什么，但是对于`vm._update`并没有详细说明，并且整体流程也不够详细，所以我们这次将会详细讲讲，整个组件挂载过程是什么样子的，并且这个核心函数到底干了什么。

这个函数会在`mounting`的过程被调用，完整的函数是这个样子的：

```js
export function mountComponent (...) {
    ...
    callHook(vm, 'beforeMount')    
    let updateComponent = () => {
      vm._update(vm._render(), hydrating) 
    }  
    new Watcher(vm, updateComponent, noop, null, true)
    ...
```

其中：

+ `vm._render()`：Render函数-->VNode
+ `vm._update()`：VNode-->DOM

我们现在回过头来，从`$mount`开始，一点点看整个mount过程到底做了什么

### 1.我们先回到最原始的`$mount`被调用的地方：

```js
// /src/core/instance/index.js
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    ...
    initState(vm)
    ...
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)  
    }
  }
}
```

在Vue组件初始化的时候，`$mount`被执行了，这里是整个`new Vue`的入口，但是`$mount`的定义是比较独特的，这与Vue本身的版本配置有关的。

### 2 `$mount`的版本配置

```js
// /scripts/config.js
const builds = {
  // runtime-only build (Browser)
  "web-runtime-dev": {
    entry: resolve("web/entry-runtime.js"), // 这里的mount定义里只包含执行render函数部分
    dest: resolve("dist/vue.runtime.js"),
    ...
  },
  // Runtime+compiler development build (Browser)
  "web-full-dev": {
    entry: resolve("web/entry-runtime-with-compiler.js"), // 这里的mount包含Template转化为render函数并且执行render函数
    dest: resolve("dist/vue.js"),
    ...
  }
};
```

正如这段配置显示的，当我们使用不同版本的Vue的时候，执行的代码也会有所不同，这也是我在上一篇文章中提到的

> 如果是Runtime+compiler版本的$mount，那么mount方法会被执行两次，一次转化模板，一次执行render函数

这一段话的原因所在。本质上`Runtime+compiler`版本是多执行了一段模板转化代码，所以我们先看这段模板转化做了什么

### 3 模板(Template）转化render

```js
// /src/platforms/web/entry-runtime-with-compiler.js

    const mount = Vue.prototype.$mount // 这个$mount定义在/src/platforms/web/runtime/index.js里面，只执行render渲染之后的操作
    Vue.prototype.$mount = function (el?: string | Element, hydrating?: boolean): Component {
      el = el && query(el)
      const options = this.$options
      
      // 只有在没有render函数的时候，才需要将template转化为render
      if (!options.render) {
        let template = options.template
        if (template) {  // 真正转化template的地方
          const { render, staticRenderFns } = compileToFunctions(template, { ...  }, this)
          options.render = render  // 现在我们得到了所要的render函数
        }
      }
      // 执行之前拿到的mount函数（/runtime/index.js版本）
      return mount.call(this, el, hydrating)
    }
```

这里需要注意的就是`$mount`是被重新定义了的，所以在`Runtime+compiler`版本中的代码，执行了两次`mount`

+ 第一次：定义在`/src/platforms/web/entry-runtime-with-compiler.js`里面，核心方法是`compileToFunctions`，主要逻辑就是把`template`转为我们需要的`render`函数
+ 第二次：定义在`/src/platforms/web/runtime/index.js`里面，核心方法是`mountComponent`（就是我们一开始提到的这个函数）主要逻辑就是执行Render的渲染和DOM的更新。具体细节我们在之后会看到

### 4 `compileToFunctions`做了什么

```js
 from: template: `<h1>{{ this.name }}</h1>`
 
 to: {with(this){return _c('h1',[_v(_s(this.name))])}}
```

`compileToFunctions`这个方法就是把template模板转化为了这个看起来又长又难懂的函数，注意在这个地方，这个函数访问了`this.name`，这也是我们为什么`render`函数能够触发响应式数据的`dep.depend`的原因，里面有一些带下划线的函数简写，这些是定义在

```js
// /src/core/instance/render-helpers.js

target._o = markOnce
target._n = toNumber
target._s = toString // <-------
target._l = renderList
target._t = renderSlot
target._q = looseEqual
target._i = looseIndexOf
target._m = renderStatic
target._f = resolveFilter
target._k = checkKeyCodes
target._b = bindObjectProps
target._v = createTextVNode // <------
target._e = createEmptyVNode
target._u = resolveScopedSlots
target._g = bindObjectListeners

```

```js
// /src/core/vdom/vnode.js
export function createTextVNode (val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val))
}
```

这些函数就是一些有关于Vnode的操作，Render函数执行完最终返回的就是一个Vnode。

### 5回到`mountComponent`

当我们执行完`compileToFunctions`之后，就执行完第一次的mount，接下来我们就执行第二次的mount，

```js
// /src/platforms/web/runtime.js
    Vue.prototype.$mount = function (
      el?: string | Element,
      hydrating?: boolean
    ): Component {
      el = el && inBrowser ? query(el) : undefined // 获取或者补充一个必备的dom
      return mountComponent(this, el, hydrating) // <-- 这里就执行了mountComponent方法
    }
```

我们接下来看一下`mountComponent`干了什么：

```js
// /src/core/instance/lifecycle.js   
export function mountComponent (
      vm: Component,
      el: ?Element,
      hydrating?: boolean
    ): Component {
      vm.$el = el
      ...
      callHook(vm, 'beforeMount') 
      
      let updateComponent
      updateComponent = () => {
        vm._update(vm._render(), hydrating)							//数据更新的核心方法
      }
    
      new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */)
      
      hydrating = false
      return vm
 }
```

还记得我们的[Vue的响应式实现](./reactive-in-vue.md)文章中提到的

> updateComponent：计算函数，用来计算组件内各个数据的值，每次Vue的数据变化，其实就是需要重新触发这个函数的计算，从而实现响应式的数据更新

的这一段话么，我们的`Render Watcher`的重新计算函数就是`updateComponent`，所以这个函数会被频繁触发，每次数据有修改都会被执行一次。也就是会多次执行`vm._update`和`vm._render`

### 6 `_render`又干了什么？

所以我们现在知道了`_render`会多次执行，那我们看看它内部又做了些什么：

```js
// /src/core/instance/render.js
    Vue.prototype._render = function (): VNode {
        const vm: Component = this
        const { render, _parentVnode } = vm.$options
        
        //添加parentVnode，提供在render函数中的vnode的上级寻找访问
        vm.$vnode = _parentVnode
        // render self
        let vnode
        try {
          vnode = render.call(vm._renderProxy, vm.$createElement) // <--- 执行了我们的Render函数，返回一个Vnode
        } catch (e) { ... }
    
        // set parent    
        vnode.parent = _parentVnode
        return vnode
      }
```

所以在这里的核心其实就是执行了`render.call`也就是执行了我们得到的render函数，对应我们之前的例子，就是执行了

```js
    (function() {
      with(this){return _c('h1',[_v(_s(this.name))])}
    })
```

这么一个函数。然后返回了了一个Vnode。接着拿着这个Vnode渲染为我们真实的DOM

### 7`_update()`又做了什么？

我们现在继续看看`_update`是怎么把`Vnode`转化为我们需要的DOM节点。

```js
// /src/core/instance/lifecycle.js   
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
        const vm: Component = this
        if (vm._isMounted) {  // 如果我们已经把对应的Vnode渲染到了DOM上
          callHook(vm, 'beforeUpdate')
        }
        
        const prevVnode = vm._vnode // 保存原始的Vnode
    
        vm._vnode = vnode // 保存当前的vnode到对应的VM内，用于patch函数
    
        if (!prevVnode) {
          // 如果没有以前的VNode，那么创建并插入DOM节点
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm)
        } else {
          // 更新发生在这里。注意，我们正在发送prevVnode和新节点，以便最少的DOM更新发生。
          vm.$el = vm.__patch__(prevVnode, vnode)
        }
      }
```

所以这里我们注意到，下一步就要执行`__patch__`，这其实是个对比diff算法，定义在

```js
// /src/platforms/web/runtime/index.js
Vue.prototype.__patch__ = inBrowser ? patch : noop
```

这里我们需要注意一下，这个patch方法，只有在浏览器环境下才有，其他环境是不存在这个函数的（因为其他环境不存在DOM），我们看一下关于patch方法的定义

```js
// /src/platforms/web/runtime/patch.js
import * as nodeOps from 'web/runtime/node-ops'
...
export const patch: Function = createPatchFunction({ nodeOps, modules })

// /src/core/vdom/patch.js
export function createPatchFunction (backend) { 
 	  const { modules, nodeOps } = backend 
    ...
		vnode.elm = nodeOps.createElement(tag, vnode)
  	...
    vnode.elm = nodeOps.createTextNode(vnode.text)
}

// /src/platforms/web/runtime/node-ops.js
export function createElement(tagName: string, vnode: VNode): Element {
  const elm = document.createElement(tagName);
}

export function createTextNode(text: string): Text {
  return document.createTextNode(text);
}
```

这里面我省略了不少内容，主要是`createPatchFunction`是怎么转化处理各种Vnode节点的，当数据更新的时候会有四个步骤来处理DOM的更新

+ 对比新旧VNode是否一致，不一致继续往下走
+ 创建新节点
+ 更新父的占位符节点
+ 删除旧节点

而处理DOM相关的时候也会用到比如 `createElement`，`createTextNode`这样的方法，而这些方法我们看到，本质上就是真实的DOM操作。从而就真正的触及到了DOM操作



## 关于Patch的理解

当我们这个时候返回来看这个`patch.js`文件的时候，会发现比较有意思的一点，当我们配置的`config.js`的版本是不同的时候，其实`patch.js`的代码几乎是一样的：

```js
// /src/platforms/web/runtime/patch.js
import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules })


// /src/platforms/weex/runtime/patch.js
import * as nodeOps from 'weex/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'weex/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({
  nodeOps,
  modules,
  LONG_LIST_THRESHOLD: 10
})

```

仔细看这两个`web`版本和`weex`版本的差异，其实就是`nodeOps`和`modules`两个文件的来源不同，分别都是各自的平台。

+ `nodeOps`：提供对应平台的操作函数中转，对于web平台就是DOM操作，对于Weex平台就是Weex DOM操作，但是在上层统一了操作API名字
+ `modules`：提供对应平台的diff算法，找到不同平台的Vnode差异。使用nodeOps里面提供的函数，diff处理Vnode的数据差异导致的UI更新（web上的是操作DOM，Weex上操作Weex Dom）

最终再通过`createPatchFunction`函数把节点差异更新到UI层级上（新增节点，插入节点，删除节点）

所以当我们深入的了解了`Patch`究竟在做什么的时候，其实我们就可以知道`Vue`本身不只是一个前端框架，而是可以看作为一个响应式数据的编译器，通过`Vue`来编译成`Vnode`，但是Vnode-->DOM的编译只是是因为`Vue`本身提供了`Web`浏览器平台的`patch`处理，提供了`Weex`平台`patch`的时候，就可以处理Vnode-->Weex DOM，当我们提供更多其他平台的patch的时候，就可以在其他的平台上执行，比如iOS，Android等等（当然现在这两个平台我们都用Weex解决了）