import React from "react"
import "../../styles/index.css"
import { Button } from 'antd';

function Index() {
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

  return (
    <div className="index">
      <div className="list">
        {
          list.map((item, index) => {
            return <div className="list-item" key={index}>
              <span>{item.title}</span>
              <span>{item.value}</span>
              <Button type="danger" onClick={(e) => delList(index, e)}>删除</Button>
            </div>
          })
        }
      </div>
      <Button type="primary" onClick={(e) => addList(e)}>增加</Button>
    </div>
  )
}

export default Index