# React最新学习笔记

## 一、类式组件和函数式组件

### 1、类式组件
+ 1、有状态（有this的概念）
+ 2、创建方式
```
class TabComponent extends React.Component {}
```
+ 3、方法的创建与调用
```
 changeTab = (e) => {
    this.setState({
      tabIndex: e
    })
  }
  render() {
    return (
      <div className="tab">
        {
          this.state.tabList.map((item, index) => {
            return <div className={`tab-item ${this.state.tabIndex == index ? 'active-sty' : ''}`} key={index} onClick={(e) => this.changeTab(index, e)}>
              <img src={this.state.tabIndex == index ? item.activeUrl : item.url}></img>
              <span>{item.title}</span>
            </div>
          })
        }
      </div>
    )
  }
```
+ 4、完整页面示例
```
import React from 'react'
import "../../styles/common/tab.css"
/*
  类式组件写法(有this)
*/
class TabComponent extends React.Component {
  state = {
    tabIndex: 0,
    tabList: [
      {
        title: '首页',
        linkUrl: "/",
        url: '../images/shouye.png',
        activeUrl: '../images/shouye_active.png'
      },
      {
        title: '政策广场',
        linkUrl: "/policy",
        url: '../images/zhengce.png',
        activeUrl: '../images/zhengce_active.png'
      },
      {
        title: '服务分类',
        linkUrl: "/service",
        url: '../images/fenglei.png',
        activeUrl: '../images/fenglei_active.png'
      },
      {
        title: '我的',
        linkUrl: "/my",
        url: '../images/wode.png',
        activeUrl: '../images/wode_active.png'
      }
    ]
  }
  changeTab = (e) => {
    this.setState({
      tabIndex: e
    })
  }
  render() {
    return (
      <div className="tab">
        {
          this.state.tabList.map((item, index) => {
            return <div className={`tab-item ${this.state.tabIndex == index ? 'active-sty' : ''}`} key={index} onClick={(e) => this.changeTab(index, e)}>
              <img src={this.state.tabIndex == index ? item.activeUrl : item.url}></img>
              <span>{item.title}</span>
            </div>
          })
        }
      </div>
    )
  }
}

export default TabComponent
```

### 2、函数式组件
+ 1、React16.8版本之前是无状态组件，React16.8版本后和Hook结合使用（函数式组件没有this的概念）
+ 2、创建方式
```
function TabComponent() {}
```
+ 3、方法的创建与调用
```
 function changeTab(e) {
    setTabIndex(e)
  }
  return (
    <div className="tab">
      {
        tabList.map((item, index) => {
          return <div className={`tab-item ${tabIndex == index ? 'active-sty' : ''}`} key={index} onClick={(e) => changeTab(index, e)}>
            <img src={tabIndex == index ? item.activeUrl : item.url}></img>
            <span>{item.title}</span>
          </div>
        })
      }
    </div>
  )
```
+ 4、完整页面示例
```
import React from 'react'
import "../../styles/common/tab.css"
/*
  函数式组件写法(用了Hook)(没有this的概念)
*/
function TabComponent() {
  const [tabIndex, setTabIndex] = React.useState(0)
  const [tabList] = React.useState([
    {
      title: '首页',
      linkUrl: "/",
      url: '../images/shouye.png',
      activeUrl: '../images/shouye_active.png'
    },
    {
      title: '政策广场',
      linkUrl: "/policy",
      url: '../images/zhengce.png',
      activeUrl: '../images/zhengce_active.png'
    },
    {
      title: '服务分类',
      linkUrl: "/service",
      url: '../images/fenglei.png',
      activeUrl: '../images/fenglei_active.png'
    },
    {
      title: '我的',
      linkUrl: "/my",
      url: '../images/wode.png',
      activeUrl: '../images/wode_active.png'
    }
  ])
  function changeTab(e) {
    setTabIndex(e)
  }
  return (
    <div className="tab">
      {
        tabList.map((item, index) => {
          return <div className={`tab-item ${tabIndex == index ? 'active-sty' : ''}`} key={index} onClick={(e) => changeTab(index, e)}>
            <img src={tabIndex == index ? item.activeUrl : item.url}></img>
            <span>{item.title}</span>
          </div>
        })
      }
    </div>
  )
}

export default TabComponent
```

### 3、注意事项
+ 1、组件引用时，首字母都需要大写

## 二、ref的使用

### 1、类式组件中ref的使用
使用React.createRef()方法

### 2、函数式组件中ref的使用
使用React.useRef()方法

## 三、路由V6特性

### 1、路由特性变化
+ 1、<Switch>重命名为<Routes>
+ 2、component/render被element替代
+ 3、默认显示路由添加index属性，默认为true
+ 4、Redirect 组件取消 变为 Navigate
+ 5、使用useNavigate替代了useHistory
+ 6、v6移出了WithRouter，添加了一些新的hooks
+ 7、使用`useRoutes`替代了v5的`react-router-config`
+ 8、新API:Outlet

### 2、路由安装v6版本
+ 1、这里路由讲解的是v6以上版本的，所以安装时注意版本
```
npm i react-router-dom --save
```
+ 2、引入使用
```
import {BrowserRouter,Route, Routes} from 'react-router-dom';
```

### 3、V6路由使用
+ 1、语法
```
<BrowserRouter>
  <Routes>
   <Route path='/路径1' element={组件标签}></Route>
   <Route path='/路径2' element={组件标签}></Route>
  </Routes>
</BrowserRouter>
```

+ 2、重定向
```
//6版本以下，exact精确匹配
<Redirect from="/" to="/center" exact />
```
```
//6版本以上
import {BrowserRouter,Route, Routes,Navigate} from 'react-router-dom';
<Route path="/" element={<Navigate to ="/center" />}/>
```

+ 3、配置404页面拦截
```
通过*表示只要上方路径都不对，则进入NotFound组件页面
<Route path='*' element={<NotFound/>} />
```

+ 4、嵌套路由
```
<BrowserRouter>
   <Routes>
      <Route path='/center' element={<Center></Center>}>
         <Route path='child' element={<Child />}></Route>
      </Route>
   </Routes>
</BrowserRouter>
```

+ 5、导航

+ 1、声明式导航
```
使用关键字:NavLink,该关键词能得到点击时的标签，并且默认添加class=“active”
/**
 * 导航组件
*/
import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import '../css/Tabbar.css'
 function Tabbar(){
     return (
         <div>
            <ul>
                {/**声明式导航 */}  
                <li><NavLink to='/films'>影片</NavLink></li>
                <li><NavLink to='/cinemas'>电影院</NavLink></li>
                <li><NavLink to='/center'>我的中心</NavLink></li>
            </ul>
         </div>
     ); 
 }
export default Tabbar
```

+ 2、编程式导航
```
原生js(window.location.href)
老版本(this,props.history.push)
v6版本以上(使用useNavigate)

import React from 'react';
import {useNavigate} from 'react-router-dom';
function Films(){
    const navigate = useNavigate()
    return (
        <div>
            Films
            <b onClick={goto404=>{
                // window.location.href="/404";//原生js
                // props.history.push("/404")//老版本写法
                navigate("/404")
            }}>去404页(编程式导航)</b>
        </div>
    );
}

export default Films
```

+ 3、路由传参
+ 方式1（路径传参）
```
navigate(`/home/message/detail/${id}/${title}`)
获取数据:函数组件会接收到props

参数在params中
props.match.params.参数名
//这样就拿到传来的数据了
```
+ 方式2(state传参)
```
navigate(`/home/message/detail`,{state:{name:'碰磕',age:111},replace:true})
//组件“//home/message/detail”为已经定义好的路由,state负责传值state:{参数:值}

参数在query中
props.match.query.参数名
//这样就拿到传来的数据了

```
+ 4、useRoutes（可以根据路由表绘制路由）（嵌套路由就是在有子路由的路由中设置children）
```
import React from "react"
import { Route, Routes, useRoutes } from 'react-router-dom';
import Index from "../pages/index/index-hook"
import Policy from "../pages/policy/index-hook"
import Classify from "../pages/classify/index-hook"
import ChildOne from "../pages/classify/child-one-hook"
import ChildTwo from "../pages/classify/child-two-hook"
import Personal from "../pages/personal/index-hook"

function BasicRoute() {
  return useRoutes([
    {
      path: "/",
      element: <Index />
    },
    {
      path: "/policy",
      element: <Policy />
    },
    {
      path: "/classify",
      element: <Classify />,
      children: [
        {
          path: "child-one",
          element: <ChildOne />
        },
        {
          path: "child-two",
          element: <ChildTwo />
        }
      ]
    },
    {
      path: "/Personal",
      element: <Personal />
    }
  ])
}

export default BasicRoute;
```
上面类似于下面
```
import React from "react"
import { Route, Routes } from 'react-router-dom';
import Index from "../pages/index/index-hook"
import Policy from "../pages/policy/index-hook"
import Classify from "../pages/classify/index-hook"
import ChildOne from "../pages/classify/child-one-hook"
import ChildTwo from "../pages/classify/child-two-hook"
import Personal from "../pages/personal/index-hook"

function BasicRoute() {
    return (
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/classify" element={<Classify />}>
          <Route path="child-one" element={<ChildOne />}></Route>
          <Route path="child-two" element={<ChildTwo />}></Route>
        </Route>
        <Route path="/personal" element={<Personal />}></Route>
      </Routes>
    )
}

export default BasicRoute;
```

## 常见问题汇总

### 1、如何设置多个className
```
使用模板字符串
className={`title ${index === this.state.active ? 'active' : ''}`}
```