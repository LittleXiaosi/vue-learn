# Vue里面的响应式实现

​		如果直接看Vue源码是如何实现响应式，是比较不容易理解的，主要是源码真的是有点绕，多个文件调来调去，所以我这边整理了一下流程：

涉及到的文件：

+ [/src/core/instance/index.js]( https://github.com/vuejs/vue/blob/dev/src/core/instance/index.js)
+ [/src/core/instance/init.js]( https://github.com/vuejs/vue/blob/dev/src/core/instance/init.js)
+ [/src/core/instance/state.js]( https://github.com/vuejs/vue/blob/dev/src/core/instance/state.js)
+ [/src/core/observer/index.js]( https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js)
+ [/src/core/observer/watcher.js]( https://github.com/vuejs/vue/blob/dev/src/core/observer/watcher.js)
+ [/src/core/observer/dep.js]( https://github.com/vuejs/vue/blob/dev/src/core/observer/dep.js)
+ [/src/core/lifecycle.js]( https://github.com/vuejs/vue/blob/dev/src/core/lifecycle.js)
+ [/src/platforms/web/runtime/index.js](https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/index.js) （PS：这个文件和Vue版本有关，默认webpack打包并且是Web使用会走这个文件）


![vue-reactive](./images/vue-reactive.jpg)

