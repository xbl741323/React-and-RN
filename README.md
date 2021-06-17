# React

### React是什么？
+ 用于构建构建用户界面的JavaScript库
+ 是一个将数据渲染为HTML视图的开源JavaScript库

### 谁开发的？
+ 由FaceBook开发，且开源

### 为什么要学？
+ 原生JavaScript操作DOM繁琐、效率低（DOM-API操作UI）
+ 原生JavaScript直接操作DOM，浏览器会进行大量的重绘重排
+ 原生JavaScript没有组件化编码方案，代码复用率低

### React特点
+ 采用组件化模式，声明式编码，提高开发效率和组件复用率
+ 在ReactNative中可以使用React语法进行移动端开发
+ 使用虚拟DOM+优秀的Diffing算法，尽量减少跟真实DOM的交互

### 如何快速创建一个React项目
+ npm install -g create-react-app 
+ create-react-app my-app （my-app为自己的demo名称）

### Webpack安装(创建项目时可以直接使用这个)
+ npm install -g yo （yo是缩写）
+ npm install -g generator-react-webpack
+ yo react-webpack

### 关于虚拟DOM
+ 本质是Object类型的对象(一般对象)
+ 虚拟DOM比较'轻'，真实DOM比较'重'，因为虚拟DOM是React内部在使用，无需真实DOM上那么多的属性
+ 虚拟DOM最终会被React转化为真实DOM，呈现在页面上

### JSX语法规则
+ 定义虚拟DOM时，不要写引号
+ 标签中混入JS表达式时要用{}
+ 样式的类名指定不要用class，要用className
+ 内联样式，要用style={{key:'value'}}的形式去写,value要用驼峰规则
+ 虚拟DOM必须只有一个根标签
+ 标签必须闭合
