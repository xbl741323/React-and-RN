require('styles/tab.css');

import React from 'react';

export class TabComponent extends React.Component {
  state = {
    barIndex: 0,
    imgList: [
      {
        title: '首页',
        url: require('../images/shouye.png'),
        activeUrl: require('../images/shouye_active.png')
      },
      {
        title: '政策广场',
        url: require('../images/zhengce.png'),
        activeUrl: require('../images/zhengce_active.png')
      },
      {
        url: require('../images/new_zixun.png')
      },
      {
        title: '服务分类',
        url: require('../images/fenglei.png'),
        activeUrl: require('../images/fenglei_active.png')
      },
      {
        title: '我的',
        url: require('../images/wode.png'),
        activeUrl: require('../images/wode_active.png')
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
            if (index == 2) {
              return <div className="tab_item" key={index}>
                <img src={item.url}></img>
              </div>
            } else {
              return <div className="tab_item" key={index} onClick={(e) => this.changeBar(index, e)}>
                <img src={this.state.barIndex == index ? item.activeUrl : item.url}></img>
                <span className={this.state.barIndex == index ? 'active_style' : ''}>{item.title}</span>
              </div>
            }
          })
        }
      </div>
    )
  }
}

TabComponent.defaultProps = {
};

export default TabComponent;