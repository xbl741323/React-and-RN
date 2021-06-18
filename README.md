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
#### 一定要注意区分：js语句(代码)与js表达式
 1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值得地方，后面这些都是表达式: 1: a 2: a+b 3: demo(1) 4: arr.map() 5：function test{}
 2. 语句(代码)：后面这些都是语句(代码): 1：if(){} 2：for(){} 3. switch(){case:xxx}
+ 样式的类名指定不要用class，要用className
+ 内联样式，要用style={{key:'value'}}的形式去写,value要用驼峰规则
+ 虚拟DOM必须只有一个根标签
+ 标签必须闭合
+ 标签首字母
1. 若以小写字母开头，则将该标签转化为html中同名标签，若html中无该标签，则报错
2. 若以大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错

### 模块
+ 理解：向外提供特定功能效果的js程序，一般就是一个js文件
+ 为什么要拆成模块化：随着业务逻辑增加，代码越来越多且复杂
+ 作用：复用js，简化js的编写，提高js的运行效率

### 组件
+ 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
+ 为什么要拆成组件：随着界面功能的增加，样式越来越复杂
+ 作用：复用编码，简化项目编码，提高运行效率

### 模块化
+ 当应用的js都以模块来编写，这个应用就是一个模块化的应用

### 组件化
+ 当应用是以多组件的方式实现，这个应用就是一个组件化的应用

### 函数式组件
+ 函数式组件的解析过程:
1. React解析组件标签，找到对应的组件
2. React发现组件是使用函数定义的，随后执行该函数返回虚拟DOM
3. React将返回的虚拟DOM转化为真实DOM，随后呈现在页面上

### 类式组件
+ 类式组件的解析过程:
1. React解析组件标签，找到对应的组件
2. React发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用原型上的render方法返回虚拟DOM
3. React将返回的虚拟DOM转化为真实DOM，随后呈现在页面上
+ 类式对象的render
1. render是放在哪的？继承React.Component的类的原型对象上，供实例使用
2. render中的this是谁？继承React.Component的类的实例对象

### 类式组件三大核心属性1：state
+ state是组件对象最重要的属性，值是对象(可以包含多个 key-value 的组合)
+ 组件被称为"状态机"，通过更新组件的state来更新对应的页面显示(重新渲染组件)
#### 强烈注意：
+ 组件中render方法中的this为组件实例对象
+ 组件自定义的方法中this为undefined，解决的方法有：
1. 强制绑定this:通过函数对象的bind()
2. 箭头函数
+ 方法的绑定传值方式：
1. `<div onClick={(e) => this.deleteRow(id, e)}></div>`
2. `<div onClick={this.deleteRow.bind(this, id)}></div>`
+ 状态数据不能直接修改或更新，要使用this.setState()

### 类式组件三大核心属性2：props
+ 每个组件对象都会有props属性
+ 可以从组件外部向组件内部传递变化的数据
```
render() {
    return (
      <div className="contain">
        {
          this.state.list.map((item, index) => {
            return <Item info={item} key={index} />
          })
        }
      </div>
    )
  }
```
+ 注意：组件内部不要修改props内数据的值
+ 组件内部读取用this.props.传递的属性名称的方式
+ 组件可以通过defaultProps属性为props内的数据赋默认值

### 类式组件三大核心属性3：refs与事件处理


