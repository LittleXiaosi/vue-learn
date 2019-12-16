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

##渲染步骤与生命周期

#### 渲染步骤


1. Template-->Render Function
   + `.vue`文件就是`Template`，是在`webpack`编译阶段转为`Render Function`
2. Render Function-->Vnode
   + `render function`的执行，就是在`updateComponent`函数执行阶段执行的（响应式原理里面提到了）
   + 如果我们手动写了`Render Function`，其实本质上就是直接跳过了编译阶段（第一步），直接使用我们自定义的`Render Function`开始第二步的渲染阶段。
3. Vnode-->Browser
   + Vnode最后更新到Browser的时候，是差异更新的，不是全量替换

#### 生命周期中的渲染

```js
//生命周期

```



