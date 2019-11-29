# 快速理解Vue的响应式

> “年级轻轻干点啥不好，非要学人做前端，自己挖坑自己爬”——xiaosiyan

## 背景

​		Vue已经是业内用的比较多框架，本身特点之一就是响应式的数据处理，在用框架的时候只需要记住data内的数据变化会引起UI变化，但是实现原理的话，还是挺有意思。所以暂且记录一下关于响应式的理解，避免一些坑。

## 先讲个小故事

在一个部门里面有若干**程序员**，也有若干的**需求**，在做需求之前，所有程序员都会去tapd上看一下有哪些需求是需要自己做的，并且给自己安排一个**排期表**，里面有每个项目的上线时间预估。然后开始做需求的时候，如果有任何一个需求开发**延期**了，就都需要重新安排自己的排期表，然后会导致所有涉及到自己的需求项目，**上线**时间都要重新预估。这就是个响应式的延期呀(￣▽￣)~*

嗯，响应式就是这么神奇，有一个需求小小的延期，你对接的所有的产品经理都会来问你怎么肥事 (`Д´*)9

## 枯燥的简易代码

这是来自Vue官网的对于响应式的核心代码的示例：

```js
  let data = { price: 5, quantity: 2 }
    let target = null
    
    // This is exactly the same Dep class
    class Dep {
      constructor () {
        this.subscribers = [] 
      }
      depend() {  
        if (target && !this.subscribers.includes(target)) {
          // Only if there is a target & it's not already subscribed
          this.subscribers.push(target)
        } 
      }
      notify() {
        this.subscribers.forEach(sub => sub())
      }
    }
    
    // Go through each of our data properties
    Object.keys(data).forEach(key => {
      let internalValue = data[key]
      
      // Each property gets a dependency instance
      const dep = new Dep()
      
      Object.defineProperty(data, key, {
        get() {
          dep.depend() // <-- Remember the target we're running
          return internalValue
        },
        set(newVal) {
          internalValue = newVal
          dep.notify() // <-- Re-run stored functions
        }
      })
    })
    
    // My watcher no longer calls dep.depend,
    // since that gets called from inside our get method.
    function watcher(myFunc) {
      target = myFunc
      target()
      target = null
    }
    
    watcher(() => {
      data.total = data.price * data.quantity
    })

```

​		在这个Demo中，如果我们改变了`data.price`或者`data.quantity`，`data.total`都是会改变的，这里的`data.total`就是一个响应式数据。所以一个响应式数据需要做到的其实就是**对于存在依赖关系的数据（data.total），在被依赖的数据（data.price或data.quantity）更新之后，依赖数据（data.total）可以自动重新计算，即响应式数据**

​		其实这一段代码并不长，总结起来，有以下几个部分

1. Dep class：依赖类，用来初始化一个依赖对象，依赖对象的作用是管理数据更新，所以有两个方法
   + depend：收集依赖，通过这个方法来告知dep，什么情况下需要触发数据重新计算
   + notify：执行数据的重新计算（需要注意的是，依赖可能多个，重新计算也可能多次）
2. watcher：数据监听器，本质上是一个依赖关系的描述，也就是说**dep**需要收集的其实就是**watcher**，有了**watcher**之后，就知道数据之间的关系，比如上面的Demo就是这个**watcher**描述了`data.total`的值是由`data.price * data.quantity`得来。所以`data.total`对`data.price`和`data.quantity`是存在依赖关系。如果`data.price`或者`data.quantity`数据变化，`data.total`需要重新计算。
3. defineProperty：数据响应式初始化（或者说数据钩子化），有了dep和watcher之后，数据就知道了应该要怎么处理重新计算，但是还不知道应该什么时候执行。defineProperty就是告诉数据应该在什么时候执行
   + get：**被依赖数据**（data.price ， data.quantity）被访问的时候，就收集依赖，凡是依赖了当前数据的数据（data.total），在当前数据改变的时候，都要重新计算。
   + set：**被依赖数据**（data.price ， data.quantity）在重新被赋值的时候，就把之前收集到的所有需要触发重新计算的地方（watcher）统统重新计算一次。

所以执行一次watcher初始化之后，第一次访问到`data.price`和`data.quantity`的时候，就已经在`data.price`和`data.quantity`上建立了对`data.total`的依赖 ，之后再改变`data.price`和`data.quantity`都会触发`data.total`的重新计算。



不过这里只是核心代码的原理展示，本身Vue还需要对响应式数据做很多的额外处理，初始化过程比这里复杂很多，尤其是复杂的数据对象需要很多深度遍历去给每个属性增加setter和getter，不过弄明白了原理，理解再去看其他大牛的源码分析，就简单很多啦~



## 深入结合一下现实例子

所以，回到我们刚刚举的例子，每一个程序员就是**被依赖的数据**，而程序员自己给自己的排期表就是自己的**dep实例**，自己的排期表里面包括了若干个需求的上线时间预估，一个需求延期就是**被依赖的数据变化**，每一个需求的上线时间预估就是一个**watcher**，而每个项目的上线时间就是**响应式数据**，所以当一个程序员排期变化（延期），就导致所有涉及到的需求的上线时间需要重新预估，这就是响应式的计算了。



嗯，这么一分析，是不是觉得项目要是能按时上线，才是小概率事件呢o(TωT)o 