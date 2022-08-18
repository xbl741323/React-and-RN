import React from "react"
import { Tabs } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

function Index() {
  const { TabPane } = Tabs;
  const navigate = useNavigate()
  const [tabList] = React.useState([
    {
      name: "子页面1",
      path: "/classify/child-one"
    },
    {
      name: "子页面2",
      path: "/classify/child-two"
    }
  ])
  const onChange = (index) => {
    console.log(index);
    navigate(tabList[index].path)
  };
  return (
    <div className="classify">
      <Tabs centered defaultActiveKey="0" onChange={onChange}>
        {
          tabList.map((item, index) => {
            return <TabPane tab={item.name} key={index}></TabPane>
          })
        }
      </Tabs>
      <Outlet></Outlet>{/* 显示子路由页面 */}
    </div>
  )
}

export default Index