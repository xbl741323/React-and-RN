import React from 'react';
import '../styles/tab.css';
import { Link } from 'react-router-dom';

export class TabComponent extends React.Component {
  state = {
    barIndex: 0,
    imgList: [
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
        url: '../images/new_zixun.png'
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
  changeBar(index) {
    this.setState({
      barIndex: index
    })
  }
  render() {
    return (
      <div className="tab">
        {
          this.state.imgList.map((item, index) => {
            if (index === 2) {
              return <div className="tab_item" key={index}>
                <img src={item.url} alt=""></img>
              </div>
            } else { // Link 的replace属性可以开启replace模式，开启后路由无法后退
              return <div className="tab_item" key={index} onClick={(e) => this.changeBar(index, e)}>
                <Link className={this.state.barIndex === index ? 'active_style tab_item' : 'hide_sty tab_item'} to={item.linkUrl}>
                  <img src={this.state.barIndex === index ? item.activeUrl : item.url} alt=""></img>
                  <span className={this.state.barIndex === index ? 'active_style' : ''}>
                    {item.title}
                  </span>
                </Link>
              </div>
            }
          })
        }
      </div >
    )
  }
}

TabComponent.defaultProps = {
};

export default TabComponent;