import React from "react"
import "../../styles/index.css"
import { Button } from 'antd';

function Index() {
  const [user, setUser] = React.useState({
    name: "胡桃",
    sex: "女",
    likes: [
      {
        title: "爱好",
        value: "埋人"
      }
    ]
  })
  const [list, setList] = React.useState([
    {
      title: "标题1",
      value: "值1"
    },
    {
      title: "标题2",
      value: "值2"
    }
  ])

  function addList() {
    let temList = list
    let length = list.length
    temList.push({
      title: `标题${length + 1}`,
      value: `值${length + 1}`
    })
    setList([...temList])
  }

  function delList(index) {
    let temList = list
    temList.splice(index, 1)
    setList([...temList])
  }

  function updateList(index) {
    let temList = list
    temList[index].title = "呼呼呼"
    setList([...temList])
  }

  function updateUser() {
    let temUser = user
    temUser.name = "甘雨"
    temUser.sex = "男"
    temUser.likes[0].value = "加班"
    setUser({ ...user, temUser })
  }

  return (
    <div className="index">
      <div className="list">
        {
          list.map((item, index) => {
            return <div className="list-item" key={index}>
              <span>{item.title}</span>
              <span>{item.value}</span>
              <Button type="danger" onClick={(e) => delList(index, e)}>删除</Button>
              <Button className="left-sty" type="primary" onClick={(e) => updateList(index, e)}>修改</Button>
            </div>
          })
        }
      </div>
      <Button type="primary" onClick={(e) => addList(e)}>增加</Button>
      <div className="list-item">
        <span>{user.name}</span>
        <span className="left-sty">{user.sex}</span>
        <span className="left-sty">{user.name}</span>
        <span className="left-sty">{user.likes[0].title}</span>
        <span className="left-sty">{user.likes[0].value}</span>
        <Button className="left-sty" type="primary" onClick={(e) => updateUser(e)}>修改</Button>
      </div>
    </div>
  )
}

export default Index