import React from 'react';
import Item from '../../components/item'
import Head from '../../components/head'
import '../../styles/home.css';

export class HomeComponent extends React.Component {
  state = {
    list: [
      {
        title: '关于拨付2020年“创响中国”合肥市创新创业大赛获奖项目资金的公示',
        time: '2021-06-17'
      },
      {
        title: '关于2020年合肥市培育新动能促进产业转型升级推动经济高质量发展若干政策支持开放平台拟扶持项目情况公示',
        time: '2020-03-16'
      },
      {
        title: '关于阜阳市开展支持现代医药产业发展若干政策相关事项申报工作的通知',
        time: '2021-12-23'
      },
      {
        title: '关于拨付2020年“创响中国”合肥市创新创业大赛获奖项目资金的公示',
        time: '2021-06-17'
      },
      {
        title: '关于2020年合肥市培育新动能促进产业转型升级推动经济高质量发展若干政策支持开放平台拟扶持项目情况公示',
        time: '2020-03-16'
      },
      {
        title: '关于阜阳市开展支持现代医药产业发展若干政策相关事项申报工作的通知',
        time: '2021-12-23'
      },
      {
        title: '关于拨付2020年“创响中国”合肥市创新创业大赛获奖项目资金的公示',
        time: '2021-06-17'
      },
      {
        title: '关于2020年合肥市培育新动能促进产业转型升级推动经济高质量发展若干政策支持开放平台拟扶持项目情况公示',
        time: '2020-03-16'
      },
      {
        title: '关于阜阳市开展支持现代医药产业发展若干政策相关事项申报工作的通知',
        time: '2021-12-23'
      },
      {
        title: '关于拨付2020年“创响中国”合肥市创新创业大赛获奖项目资金的公示',
        time: '2021-06-17'
      },
      {
        title: '关于2020年合肥市培育新动能促进产业转型升级推动经济高质量发展若干政策支持开放平台拟扶持项目情况公示',
        time: '2020-03-16'
      },
      {
        title: '关于阜阳市开展支持现代医药产业发展若干政策相关事项申报工作的通知',
        time: '2021-12-23'
      }
    ]
  }
  render() {
    return (
      <div className="home">
        <Head />
        {
          this.state.list.map((item, index) => {
            return <Item info={item} key={index} />
          })
        }
      </div>
    )
  }
}

export default HomeComponent;