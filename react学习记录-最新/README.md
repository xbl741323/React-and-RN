# React最新学习笔记

## 一、类式组件和函数式组件

## 二、类式组件和函数式组件

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
+ 1、无状态组件（没有this的概念）
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