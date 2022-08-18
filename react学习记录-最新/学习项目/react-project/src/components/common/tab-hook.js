import React, { useEffect } from 'react'
import "../../styles/common/tab.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router'
/*
  函数式组件写法(用了Hook)(没有this的概念)
*/
function TabComponent() {
  const location = useLocation()
  const navigate = useNavigate()
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
      linkUrl: "/classify",
      url: '../images/fenglei.png',
      activeUrl: '../images/fenglei_active.png'
    },
    {
      title: '我的',
      linkUrl: "/personal",
      url: '../images/wode.png',
      activeUrl: '../images/wode_active.png'
    }
  ])
  const changeTab = (e) => {
    setTabIndex(e)
    let url = tabList[e].linkUrl
    navigate(url)
  }
  const checkPath = () => {
    let routeList = ['/', '/policy', '/classify', '/personal']
    let index = routeList.indexOf(location.pathname)
    if (index !== -1) {
      setTabIndex(index)
    }
  }
  useEffect(() => {
    checkPath()
  }, []);

  return (
    <div className="tab">
      {
        tabList.map((item, index) => {
          return <div className={`tab-item ${tabIndex === index ? 'active-sty' : ''}`} key={index} onClick={(e) => changeTab(index, e)}>
            <img alt='图片' src={tabIndex === index ? item.activeUrl : item.url}></img>
            <span>{item.title}</span>
          </div>
        })
      }
    </div>
  )
}

export default TabComponent