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

这个部分是Vue开始初始化的时候就需要执行的代码，这里面有几个需要注意的点

1. Vue的初始化是执行init函数，但是执行完init函数并没有完成响应式化，因为Vue是在$mount的时候（即挂载）时，才会执行watcher的初始化。所以响应式必须要是一个被挂载的组件上才能体现。

2. vm是Vue的实例化，但其实vm的数据类型是Component，`const vm: Component = this`，也就是说本质上，Vue实例化的过程，就是创建组件的过程，但是正如第一点说的，只是初始化了组件并不完整，最终组件是需要挂载$mount来完成响应式。

3. Vue在初始化的时候，data能够接受一个函数返回值的原因就是因为在initData的时候，如果

   ```typeof vm.$options.data===‘’function“```的值为true的时候，会执行一次这个data函数获取返回值

4. 