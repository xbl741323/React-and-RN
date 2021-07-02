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
+ 注意：props内部的数据是只读的，组件内部不要修改props内部数据的值
+ 组件内部读取用this.props.传递的属性名称的方式
+ 组件可以通过defaultProps属性为props内的数据赋默认值

### 类式组件三大核心属性3：Refs（勿过度使用Refs）与事件处理
#### Refs
+ 字符串形式的ref（官方已不推荐使用）
+ 回调函数形式的ref（官方推荐使用）
```
<input ref={(c)=>this.input1 = c}></input>
```
+ React.createRef()形式的ref（官方推荐使用）
```
myRef = createRef()
render() {
    return (
      <div className="contain">
        <input ref={this.myRef}></input>
        }
      </div>
    )
  }
```

#### 事件处理(只能自己操作自己)
1. 通过onXxx属性指事件处理函数（注意大小写）
+ React使用的自定义（合成）事件，而不是使用的原生DOM事件 --- 为了更好的兼容性
+ React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）--- 为了更高效
2. 通过event.target得到发生事件的DOM元素对象 --- 不要过度使用refs

#### 非受控组件(需要用到Refs)
+ 操作数据时，现用现取，需要通过Refs获取对应数据

#### 受控组件(不用操作Refs，随着你的输入维护状态，需要将值维护到state中)（推荐使用受控组件）
+ 通过onChange方法将数据绑定到state中，需要用到对应数据时，直接调用即可

#### 高阶函数
如果一个函数符合下面2个规范中的一个，那么该函数就是
1. 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数
2. 若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数
```
saveForm=(val)=>{
    return (e)=>{
      this.setState({
        [val]:e.target.value
      })
    }
  }

  render() {
    return (
      <div className="contain">
        <input onChange={this.saveForm('name')} />
        <input onChange={this.saveForm('pwd')} />
      </div>
    )
  }
```
3. 常见的高价函数有：Promise、setTimeout、arr.map()
4. 函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

### React生命周期
#### 旧版：
![image](https://user-images.githubusercontent.com/49593119/123760302-4a4aca00-d8f3-11eb-8c1a-beca2f08ee0d.png)
#### 生命周期的三个阶段（旧）：
1. 初始化阶段：由ReactDOM.render()触发--初次渲染
+ constructor()
+ componentWillMount()
+ render()
+ componentDidMount() 
#### componentDidMount() -- 常用，一般在这个钩子函数中做一些初始化的操作：
例如：
+ 开启定时器
+ 发送网络请求
+ 订阅消息等

2. 更新阶段：由组件内部this.setState()或父组件重新render触发
+ shouldComponentUpdate()
+ componentWillUpdate()
+ render()  --必须使用的一个钩子函数
+ componentDidUpdate()

3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
+ componentWillUnmount()
#### componentWillUnmount() -- 常用，一般在这个钩子函数中做一些收尾的操作：
例如：
+ 关闭定时器
+ 取消订阅等

#### 新版：
![image](https://user-images.githubusercontent.com/49593119/123886902-0c958200-d983-11eb-8019-6e3e657c7bfb.png)

#### 路由的基本使用
1. 明确好界面中的导航栏、展示区
2. 导航栏的a标签改为Link标签 
```
<Link to="/xxx"></Link>
```
3. 展示区写Route标签进行路径的匹配 
```
<Route paht="/xxx" component={Demo}></Route>
```
4. <App>的最外侧包裹一个`<BrowserRouter>`或`<HashRouter>`
 
 #### 路由组件与一般组件
 1. 写法不同：
 + 一般组件：<Demo />
 + 路由组件：<Route path="/demo" component={Demo}>
 2. 存放位置不同：
 + 一般组件：components
 + 路由组件：pages
 3. 接收到的props不同：
 + 一般组件：写组件时父组件传递了什么，就能接收到什么
 + 路由组件：接收到三个固定的属性
 ```
history:
     go: ƒ go(n)
     goBack: ƒ goBack()
     goForward: ƒ goForward()
     push: ƒ push(path, state)
     replace: ƒ replace(path, state)
location:
     pathname: "/"
     search: ""
     state: undefined
match:
     params: {}
     path: "/"
     url: "/"
 ```

 
#### 路由的严格匹配与模糊匹配
 1. 默认使用的是模糊匹配，（简单记：【输入的路径】必须包括【匹配的路径】，且顺序要一致）
 2. 开启严格匹配：`<Route exact={true} path="/about" component={About}>`
 3. 严格匹配不要随便开启，需要时再开，有些时候开启会导致无法继续匹配二级路由
 
#### Switch的使用
 1. 通常情况下，path和component是一一对应的关系
 2. Switch可以提高路由匹配效率（单一匹配）
 3. 具体使用代码如下：
 ```
 <Switch>
    <Route exact path="/" component={home}></Route>
    <Route path="/policy" component={policy}></Route>
    <Route exact path="/service" component={service}></Route>
    <Route exact path="/my" component={my}></Route>
    <Redirect to="/" />
 </Switch>
 ```
 
#### Redirect的使用
 1. 一般写在所有路由注册的最下方，当所有的路由都无法匹配时，跳转到Redirect指定的路由
 2. 具体使用代码如下：
 ```
 <Route exact path="/" component={home}></Route>
 <Route path="/policy" component={policy}></Route>
 <Route exact path="/service" component={service}></Route>
 <Route exact path="/my" component={my}></Route>
 <Redirect to="/" />
 ```
 
 #### 嵌套路由
 1. 注册子路由时要写上父路由的path值
 2. 路由的匹配是按照路由的顺序进行的
 3. 具体使用代码如下：
 ```
 <Switch>
    <Route exact path="/policy/result" component={result}></Route>
    <Route exact path="/policy/need" component={need}></Route>
    <Redirect to="/policy/result" />
 </Switch>
 ```
 
 #### 路由传参的几种方式
 1. 使用Link或NavLink跳转传参，使用代码如下：
 + 通过params传参：
 ```
 路由链接（携带参数）：`<Link to='/demo/test/tom/18'>详情</Link>`
 注册路由*（声明接收）：`<Route path="demo/test/:name/:age" component={Test}></Route>`
 接收参数：`const {id,title} = this.props.match.params`  // 解构赋值，接收参数
 ```
 + 通过search传参：
  ```
 路由链接（携带参数）：`<Link to='/demo/test/id=${info.id}&title=${info.title}'>详情</Link>`
 注册路由*（声明接收）：`<Route path="demo/test" component={Test}></Route>`
 接收参数：`const {search} = this.props.location`  // 解构赋值，接收参数
 备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
 ```
 + 通过state传参
  ```
 路由链接（携带参数）：`<Link to={{pathname:"/demo/test",state:{id:"",title:""}}}>详情</Link>`
 注册路由*（声明接收）：`<Route path="demo/test" component={Test}></Route>`
 接收参数：`const { id, title } = this.props.location.state`  // 解构赋值，接收参数
 ```
 
 2. 使用withRouter跳转传参（编程式路由导航传参）
 + 通过state传参：
 ```
    this.props.history.push({
            pathname: "/policy-detail",
            state:{
                info:this.state.info
            }
        })
 ```
 ```
 const { info } = this.props.location.state // 解构接收参数
 ```
 + 通过query传参：
 ```
    this.props.history.push({
            pathname: "/policy-detail",
            query:{
                info:this.state.info
            }
        })
 ```
 ```
  const { info } = this.props.location.query // 解构接收参数
 ```
 
 #### 几种编程式路由导航方法总结：（路由组件自带this.props.history）(一般组件需要用withRouter包裹才有)
 借助this.props.history对象上的API操作路由跳转、前进、后退
+ `this.props.history.push()`
+ `this.props.history.replace()`
+ `this.props.history.go()`
+ `this.props.history.goForward()`
+ `this.props.history.goBack()`
 
 #### BrowserRouter与HashRouter的区别
1. 底层原理不一样
+ BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
+ HashRouter使用的是URL的哈希值
 
2. url表现形式不一样
+ BrowserRouter的路径中没有#,例如: localhost:3808/demo/test
+ HashRouter的路径包含#,例如: localhost: 3008/#/ demo/test
 
3. 刷新后对路由state参数的影响
+ BrowserRouter没有任何影响，因为state保存在history对象中
+ HashRouter刷新后会导致路由state参数的丢失
 
4. 备注: HashRouter可以用于解决一些路径错误相关的问题
 
### redux
 
 #### 原理图
 ![image](https://user-images.githubusercontent.com/49593119/124234320-7611be00-db46-11eb-8e78-1a521be5ac30.png)

