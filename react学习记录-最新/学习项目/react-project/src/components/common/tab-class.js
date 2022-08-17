import React from 'react'
import "../../styles/common/tab.css"
import { NavLink } from 'react-router-dom';
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
        linkUrl: "/personal",
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
              <NavLink className={`tab-item hide-sty ${this.state.tabIndex == index ? 'active-sty' : ''}`} to={item.linkUrl}>
                <img src={this.state.tabIndex == index ? item.activeUrl : item.url}></img>
                <span>{item.title}</span>
              </NavLink>
            </div>
          })
        }
      </div>
    )
  }
}

export default TabComponent