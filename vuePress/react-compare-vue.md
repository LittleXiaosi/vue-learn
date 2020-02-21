# React与Vue

## 初步了解React的各种概念

### JSX 

React的JSX与Vue中的Template的概念是比较类似的，写法上会有一些差异，

1. Vue中快速取值使用`{{}}` 而在React中则是`{}`。
2. 命名规范，Vue中的Template属性会与Html保持一致，但是React使用了驼峰命名，更接近于JS语法
3. 创建节点，Vue的createElement与React的基本类似，传递的参数也是比较类似
4. 但是这里面有个区别就是一般来讲，Vue是不会强调JSX这个概念（虽然Vue也需要用到，Vue的Template会尽可能的贴近原生HTML体验，只有在写函数式组件，并且不直接引用.Vue文件的时候才需要这么写）

### 元素渲染

1. React使用`ReactDOM.render`函数来进行渲染，而Vue使用`new Vue`来进行渲染；
2. React的元素渲染本身不是响应式，Vue本身的元素渲染就已经是响应式了。

### 组件与Props

1. React的函数式组件返回的是一个React元素，使用的是JSX语法定义。但是Vue的函数式组件返回的是一个Vnode节点（虚拟节点），这个节点其实是一个包含对Dom节点描述信息的JS对象。使用的是JS的语法。
2. 函数式组件定义中，React会将所有接收到的属性都封装在一个对象中作为prop传递，但是Vue只会接受定义了的prop，如果传递了未定义的props，在组件内部是获取不到这个参数的。并且在Vue中，props的名字定义是有保留字段的，即Vue本身的保留字段和HTML的特殊属性，比如class属性，就必须是一个`{className:boolean}`形态的对象
3. 组件大小写，React会通过组件大小写来区分是不是自定义组件，但是Vue只是通过是否自定义来区分，自定义的组件名称没有严格的格式要求，通常有大小写区分和横线区分两种。
4. 在Vue中，函数式组件只是因为这个组件需要通过一个特定函数来初始化，返回Vnode，但是React中，任何一个返回React 元素（JSX语法）的函数，都是一个组件。
5. Props，在Vue中，Props必须有明确的定义，包括字段名称和字段类型，在统一位置处理props输入（目前V2.x版本），但是React并没有需要严格校验Props，Props的管理与JS类似，是一种松散的JS对象式管理（<u>所以这里会有一个潜在问题，大量的Props需要怎么管理？,多级JSX参数需要知道上一级数据结构，需要怎么管理？因为当前组件的数据来源是上一级组件的数据封装，额外封装的时候怎么知道属性格式？</u>）
6. Props修改，React不允许修改Props，Vue的Props也是不允许修改的，这是一致的，Vue只允许修改组件内的Data，Props只能接受参数

### State与生命周期

1. React与Vue在生命周期的核心概念上，差别就在于State和Data的概念，也是Vue的核心——响应式数据的原理。Vue是在数据内部通过给所有数据执行**defineProperty**，监控所有数据的set和get，从而达到自动检测数据的目的，Vue的核心引擎处理两部分，一部分是响应式数据，一部分是Vnode渲染为DOM。而React通过区分props和state，用来区分传参和内部数据，自行处理数据更新，React的核心引擎是处理JSX渲染为DOM这么一个过程。
2. Vue的`$set`与React的`setState`，两者都是设置数据更新，但是`$set`主要是用来处理响应式数据增加`defineProperty`，React直接修改数据是不触发重新渲染的，但是Vue是可能触发重新渲染的。`$set`在Vue中算是一个辅助算法，但是`setState`在React中是一个必备方法
3. 相对而言，React的生命周期是比较短，易于理解的<http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/>，但是Vue的生命周期因为涉及到数据更新和template部分，所以会复杂一些：<https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA>>
4. 基于Vue的核心理念是数据驱动，所以要触发重新渲染，只能是数据有改变才行，但是对于React，还有**forceUpdate**可以触发强制渲染。
5. 数据更新，React的`setState`，其实不是同步更新数据，`setState`需要通过函数式设定，来获取上一次`setState`的返回值，而Vue的话，数据更新直接交给了响应式数据处理，所以数据更新部分是同步的，只是触发渲染部分再做了额外优化，不是同步渲染。

### 事件处理

1. 对于JSX的处理上，React不会额外处理this指针的相关问题，所以在JSX上面执行函数的时候，就没有了对应的上下文环境了（也是是this指针指向的不是当前组件）这个时候就需要自行绑定this指向，但是在Vue上面，是不需要额外处理this问题，所有在组件内定义的data，prop和methods当前上下文环境都会改为当前组件。不需要考虑this指针变化问题。
2. JSX的语法中，事件绑定和属性绑定是没有区别的，只是在绑定的属性上是不一致的，但是在Vue的语法中，绑定method和绑定data是不同的绑定方式，能够从template的中直接看出来。

### 条件渲染，列表&key

1. 在React中，是直接使用jsx语法来返回不同的React元素控制渲染，但是在Vue中，需要通过指令来控制渲染 ，不能直接操作Vue的Template元素部分。
2. 在列表渲染的时候，React通常使用Map方法来生成新的React元素，但是Vue更多是通过foreach方法，修改本来的元素，这样是个响应式变化。
3. 在列表渲染的时候，React使用index作为key值，是会影响到当数组数据变化时候的状态的，因为渲染的过程是手动的，可能会出现数据与渲染不同步的情况，但是Vue因为不是直接渲染，index作为key值，并不会有多大的影响，只是需要重新计算一次缓存，因为Vue是不能直接渲染的，想要变化UI，必须变化数据，在变化数据的时候是不会出现渲染与数据不同步的情况。
4. React的JSX是可以嵌套js表达式的，也就是说内部可以包含比较复杂的逻辑，Vue是只允许通过既定的指令（当然指令也可以自定义）来处理渲染层面的问题，Vue在Template的层级复杂度，基本取决于Dom结构的层级，和逻辑关系不大，逻辑会放在script部分单独处理