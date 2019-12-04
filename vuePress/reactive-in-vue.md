# Vue里面的响应式实现

​		如果直接看Vue源码是如何实现响应式，是比较不容易理解的，主要是源码真的是有点绕，多个文件调来调去，所以我这边整理了一下流程：

## 基本流程

涉及到的文件：

+ [/src/core/instance/index.js]( https://github.com/vuejs/vue/blob/dev/src/core/instance/index.js)
+ [/src/core/instance/init.js]( https://github.com/vuejs/vue/blob/dev/src/core/instance/init.js)
+ [/src/core/instance/state.js]( https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js)
+ [/src/core/observer/index.js]( https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js)
+ [/src/core/observer/watcher.js]( https://github.com/vuejs/vue/blob/dev/src/core/observer/watcher.js)
+ [/src/core/observer/dep.js]( https://github.com/vuejs/vue/blob/dev/src/core/observer/dep.js)
+ [/src/core/lifecycle.js]( https://github.com/vuejs/vue/blob/dev/src/core/lifecycle.js)
+ [/src/platforms/web/runtime/index.js](https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/index.js) （PS：这个文件和Vue版本有关，默认webpack打包并且是Web环境，会执行这个文件）


![vue-reactive](./images/vue-reactive.jpg)

这张图里面基本包含了Vue响应式的所有主要函数，其实从图上看来，还是比较复杂的，接下来我会分区域逐步讲解这个图片上都做了什么。

## 详细讲解

### src/core/instance

这个部分是Vue开始初始化的时候就需要执行的代码

```js
//index.js
this._init(options)
```

这段代码传参开始进入Vue的初始化阶段

> Vue的初始化是执行init函数，但是执行完init函数并没有完成响应式化，因为Vue是在$mount的时候（即挂载）时，才会执行watcher的初始化。所以真正的响应式必须要是一个被挂载的组件上才能体现。

```js
//init.js
Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
 		...
}
```

   这是真正开始执行init函数定义的地方，注意这里的vm的数据类型是Component

>  vm是Vue的实例化，但其实vm的数据类型是Component，`const vm: Component = this`，也就是说本质上，Vue实例化的过程，就是创建组件的过程，但是正如第一点说的，只是初始化了组件并不完整，最终组件是需要挂载$mount来完成响应式。

```js
//state.js
initData(vm)
```

开始执行初始化data，`state.js`内其实需要处理所有能够被`this.`找到的东西，包括props，methods，data，computed，watch。

> 1. Vue在初始化的时候，data能够接受一个函数返回值的原因就是因为在initData的时候，如果`typeof vm.$options.data===‘’function“`的值为true的时候，会执行一次这个data函数获取返回值
> 2. 初始化顺序是 props->methods->data->computed->watch，所以在data函数中，可以访问props参数，在computed可以访问data数据，watch监听所有，是因为数据初始化顺序

```js
//state.js
let data = vm.$options.data
...
proxy(vm, `_data`, key)
...
observe(data, true /* asRootData */)		// go to src/core/observer/index.js
```

拿到data参数之后，通过observe方法开始给data内的数据添加响应式处理。

> 1. props也需要响应式化，但是流程比较data相对简单点，核心方法一样
> 2. 这里的proxy不是对数据响应式的那个Proxy，而是处理this指针指向的问题，通过`Object.defineProperty(vm, key, sharedPropertyDefinition)`方法，把对vm.xxx的访问代理成了vm._data.xxx的访问。从而实现了Vue内部可以使用this.xxx来访问数据。

```js
//init.js
if (vm.$options.el) {
  vm.$mount(vm.$options.el)
}
```

在初始化执行完毕之后（所有的init执行完），如果当前的参数里面有el的话，就会执行挂载

> Vue的watcher实例化是在这个阶段，响应式需要真正跑起来，还记得watcher内的函数是需要被执行一次收集依赖的么？Vue就是在这个时候收集依赖的。不过过程稍微复杂一点



### src/platforms/web/runtime/

```js
//index.js
Vue.prototype.$mount = function(){
  ...
	return mountComponent(this, el, hydrating)
}
```

这里提供了一个通用的挂载方法，实际上是执行了`mountComponent`函数

> 这里需要注意的是，Vue根据引用版本不同，当前的runtime内执行的文件是不一样的，默认的浏览器版本Vue才是这个文件，Weex和本地编译，都不是这个文件。



### src/core/instance/

```js
//lifecycle.js
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
```

这里才是真正初始化了Watcher，执行了内部的计算函数。这几个参数稍微讲解下

+ vm：当前的Vue实例（也就是当前组件）
+ updateComponent：计算函数，用来计算组件内各个数据的值，每次Vue的数据变化，其实就是需要重新触发这个函数的计算，从而实现响应式的数据更新。这个函数内部有点复杂，之后聊到组件实现细节再提好了。
+ noop：回调函数，计算完数据更新之后的回调函数。我们在Vue中写的Watch内的回调，就是在这里被执行了
+ before：钩子函数，数据更新之前会执行
+ true：是不是一个renderWatcher，如果是一个渲染watcher，会有个单独的指针提供访问，其余的watchers里面，其实是不涉及到重新render的，执行时机就不一样了。

```js
//lifecycle.js
updateComponent = () => {
      vm._update(vm._render(), hydrating)
}
```

这里就是执行数据的重新计算函数，本质上会接受两个参数

+ vm._render()：返回值是一个Vnode，用来重新渲染页面
+ hydrating：状态位，用来判断是不是第一次渲染（计算量不同）

```js
//lifecycle.js
vm.$el = vm.__patch__(prevVnode, vnode)
```

在这个地方，处理真正的渲染成HTML节点并且挂在对应的真实dom上面。

执行完所有的这一切，第一次生命周期就结束了。这里会返回一个VM，然后我们重新回到响应式内部看看代码，因为Watcher虽然初始化完了，但是我们的`updateComponent`只执行完了第一次计算(其实已经完成了响应式收集)，之后的计算就要回到响应式来触发了。



### src/core/observer/

这部分相对比较复杂，这里面主要是响应式的定义代码，但是需要注意的是，这里面只是**定义**了响应式对象，真正要执行起来是需要new Watcher之后，getter和setter触发才行

```js
//index.js
ob = new Observer(value)		// value === data
```

初始化data响应式时候，代码执行顺序是从`src/core/instance/state.js`文件来的，所以当前的`value==data==vm.$options.data`

```js
//index.js
const keys = Object.keys(obj)					//obj==value
for (let i = 0; i < keys.length; i++) {
	defineReactive(obj, keys[i])
}
```

这里就是遍历data的属性，分别给每个属性添加响应式处理。

```js
//index.js
...
const dep = new Dep()
...
const getter = property && property.get
const setter = property && property.set
...
Object.defineProperty(obj, key, {
  	enumerable: true,
    configurable: true,
  	get:function(){...},
    set:function(){...}     
})
```

执行到到这里，才是真正开始定义响应式数据，现在我们需要分别看一下get和set的处理

> 这里每一个dep其实对应的是每一个data内的属性，因为遍历的时候每次都要重新实例化新的dep

#### get：depend

```js
// index.js
get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        ...
      }
      return value
},
```

这里就是真正的data数据的get定义，在这里主要做的就是执行`dep.depend()`，也就是把对应的watcher添加到dep里面，dep会收集所有和当前属性相关的watcher，是一个数组；

> 这里面有个判断`Dep.target`，这个`target`值其实就是一个当前的`Watcher`，在初始化并且用户没有额外添加自己的watch的情况下，这个watcher就是`RenderWatcher`，所有的dep在初始化的时候都会添加同一个`RenderWatcher`。这是因为之前我们执行`$mount`的时候，执行了`new Watcher`，具体细节我们就需要从下面的`new Watcher`细节看起了

#### set：notify

```js
// index.js
set: function reactiveSetter (newVal) {
  const value = getter ? getter.call(obj) : val
  /* eslint-disable no-self-compare */
  if (newVal === value || (newVal !== newVal && value !== value)) {
    return
  }
 ...
  // #7981: for accessor properties without setter
  if (getter && !setter) return
  if (setter) {
    setter.call(obj, newVal)
  } else {
    val = newVal
  }
	...
  dep.notify()
}
```

这里是真正的data的set定义，主要目的就是执行`dep.notify()`并且更新一下数据。这里有几个比较特别的地方，需要额外注意一下：

+ `newVal === value `：这里判断了新旧数据，所以只有在新旧数据不同的时候，才会执行watcher的计算，所以Vue的Watcher本质上是一个差异更新。
+ `(newVal !== newVal && value !== value)`：这里是判断`NaN===NaN`为false引起的bug
+ `setter.call`：用户可以自行改动setter来修改数据计算（但是比较少见这种处理）

#### depend的执行

好的，看完了set和get的定义，还记得我们的代码真正执行的地方是在new Watcher的时候么，我们现在回过头看一下，第一次执行new Watcher的时候，执行了什么？

```js
//watcher.js
 this.value = this.lazy ? undefined : this.get()
```

`watcher`在初始化之后，会执行一`this.get()`次获取`this.value`数据，而这个`this.value`就是当前`watcher`计算出来的值，

> 1. 而在当前的例子中，当前的`watcher`就是默认的`RenderWatcher`，这个`watcher`的`value`计算值是空的，没有返回值。
> 2. 如果`this.value`有值，那就是user watcher的计算的结果，就是我们监听的watcher的nv；

```js
//watcher.js
get () {
  pushTarget(this)
  let value
  const vm = this.vm
  try {
    value = this.getter.call(vm, vm)
  } catch (e) {
   ...
  } finally {
    ...
    popTarget()
    this.cleanupDeps()
  }
  return value
}
```

这里就是执行了watcher的get，

+ `pushTarget(this)，popTarget()`：这两个方法是把watcher添加进入dep里面，具体定义在`dep.js`里面
+ `value = this.getter.call(vm, vm)`：这里是执行了Watcher内的计算，得到新的的Value（或者只是触发依赖）对于渲染watcher而言，`this.getter`就是上文的`updateComponent`，`updateComponent`的内部我们先不深究，但是这个函数的执行，就会触发到所有的`data`内的属性的`get`。具体执行就是`dep.depend`
+  `this.cleanupDeps()`：本质上是更新订阅（当然也会清除旧的订阅）不影响主要的逻辑，主要处理的是类似v-if的情况，避免额外的计算，保持依赖都是最新值。

```js
//dep.js
Dep.target = null
const targetStack = []

export function pushTarget (target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
```

还记得我们上面在get内需要判断 `Dep.target`么，就是在这里产生值的，在我们当前流程中，`target`就是`RenderWatcher`。

```js
//dep.js
depend () {
  if (Dep.target) {
    Dep.target.addDep(this)					//Dep.target===watcher，this===dep
  }
}
```

这里执行的就是`dep.depend`，所以本质上，还是执行了`watcher`的`addDep()`方法：

```js
//watcher.js   from：dep.depend()  ==》  watcher.addDep(dep)
addDep (dep: Dep) {
  const id = dep.id
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id)
    this.newDeps.push(dep)
    if (!this.depIds.has(id)) {
      dep.addSub(this)
    }
  }
}
```

这里有一段比较复杂的判断，主要是因为之前我们提到了`this.cleanupDeps`，所以每次的依赖都是重新收集的，每次`newDeps`都是新的，

>  这里把`dep`添加进了`watcher.deps`里面（`cleanupDeps`的时候，把`newDeps`赋值给了`deps`）

+ 初始化：初始化的时候，`newDepIds`和`depIds`都是空的，所以就直接执行了`dep.addSub(this)`
+ 数据变化：`newDepIds`会保持最新收集到的状态，`depIds`会把缺少的那一个添加进入`dep`

我们继续看`addSub`又发生了什么

```js
//dep.js from: dep.addSub(this) ==》 dep.addSub(watcher)
addSub (sub: Watcher) {
  this.subs.push(sub)
}
```

> 这里把`watcher`添加进入了`dep.subs`里面

所以这个地方需要稍微注意一下，我们在原理展示里面没有这么复杂，只需要subs收集watcher就可以了，但是Vue真实处理的时候是双向收集的，dep收集watcher，而watcher也收集dep。

#### notify的执行

我们到目前为止已经完成了依赖收集的过程，现在我们再来看看派发过程是怎么处理的。在数据有修改的时候，实际上是触发了set的`notify()`

```js
 //dep.js.  from : dep.notify()
notify () {
  const subs = this.subs.slice()
	...
  for (let i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
}
```

还记得`subs`里面放的都是`watcher`么？所以接下来又回到`watcher`

```JS
//watcher.js   
update () {
   ...
   queueWatcher(this)   
}
```

接下来就到了另一个文件

```js
//scheduler.js

const queue: Array<Watcher> = []
let has: { [key: number]: ?true } = {}
let flushing = false

export function queueWatcher (watcher: Watcher) {
  const id = watcher.id
  if (has[id] == null) {
    has[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true
      ...
      nextTick(flushSchedulerQueue)
    }
  }
}
```

这里有几个比较复杂的注意项：

+ `has[id]`：这个判断是为了保证，一个watcher对象被添加一次。举个例子，我们一个组件只有一个renderWatcher，这一个RenderWatcher在组件内data在多处修改时，应该只需要计算一次。
+ `flushing`：状态值，当前是否正在进行watcher的计算
+ `queue`：存储所有需要计算的watcher
+ `nextTick`：下一个`tick`再执行这些`watcher`