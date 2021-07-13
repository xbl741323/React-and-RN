import React from 'react';
import '../styles/tab.css';
import { Link } from 'react-router-dom';

// 函数式组件写法
function TabComponent() {

  const [barIndex, setBarIndex] = React.useState(0)
  const [imgList] = React.useState([
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
  ])

  function changeBar(e) {
    setBarIndex(e)
  }

  return (
    <div className="tab">
      {
        imgList.map((item, index) => {
          if (index === 2) {
            return <div className="tab_item" key={index}>
              <img src={item.url} alt=""></img>
            </div>
          } else { // Link 的replace属性可以开启replace模式，开启后路由无法后退
            return <div className="tab_item" key={index} onClick={(e) => changeBar(index, e)}>
              <Link className={barIndex === index ? 'active_style tab_item' : 'hide_sty tab_item'} to={item.linkUrl}>
                <img src={barIndex === index ? item.activeUrl : item.url} alt=""></img>
                <span className={barIndex === index ? 'active_style' : ''}>
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

export default TabComponent;


// 类式组件写法
// export class TabComponent extends React.Component {
//   state = {
//     barIndex: 0,
// imgList: [
//   {
//     title: '首页',
//     linkUrl: "/",
//     url: '../images/shouye.png',
//     activeUrl: '../images/shouye_active.png'
//   },
//   {
//     title: '政策广场',
//     linkUrl: "/policy",
//     url: '../images/zhengce.png',
//     activeUrl: '../images/zhengce_active.png'
//   },
//   {
//     url: '../images/new_zixun.png'
//   },
//   {
//     title: '服务分类',
//     linkUrl: "/service",
//     url: '../images/fenglei.png',
//     activeUrl: '../images/fenglei_active.png'
//   },
//   {
//     title: '我的',
//     linkUrl: "/my",
//     url: '../images/wode.png',
//     activeUrl: '../images/wode_active.png'
//   }
// ]
//   }
//   changeBar(index) {
//     this.setState({
//       barIndex: index
//     },()=>{
//       console.log(this.state.barIndex,"输出tab")
//     })
//   }
//   render() {
//     return (
//       <div className="tab">
//         {
//           this.state.imgList.map((item, index) => {
//             if (index === 2) {
//               return <div className="tab_item" key={index}>
//                 <img src={item.url} alt=""></img>
//               </div>
//             } else { // Link 的replace属性可以开启replace模式，开启后路由无法后退
//               return <div className="tab_item" key={index} onClick={(e) => this.changeBar(index, e)}>
//                 <Link className={this.state.barIndex === index ? 'active_style tab_item' : 'hide_sty tab_item'} to={item.linkUrl}>
//                   <img src={this.state.barIndex === index ? item.activeUrl : item.url} alt=""></img>
//                   <span className={this.state.barIndex === index ? 'active_style' : ''}>
//                     {item.title}
//                   </span>
//                 </Link>
//               </div>
//             }
//           })
//         }
//       </div >
//     )
//   }
// }

// TabComponent.defaultProps = {
// };

// export default TabComponent;