import React from "react"
import { useNavigate } from "react-router-dom"
import "../../styles/policy.css"

function Index() {
  const navigate = useNavigate()
  const [textList] = React.useState([
    {
      title: "我是标题1",
      desc: "我是内容我是内容我是内容1"
    },
    {
      title: "我是标题2",
      desc: "我是内容我是内容我是内容2"
    },
    {
      title: "我是标题3",
      desc: "我是内容我是内容我是内容3"
    }
  ])

  const toDetail = (index) => {
    console.log(index)
    // navigate(`/detail?id=${index}`)
    navigate(`/detail?id=${index}`)
  }
  return (
    <div className="policy">
      {
        textList.map((item, index) => {
          return <div onClick={(e) => toDetail(index, (e))} className="policy-item" key={index}>
            <span>{item.title}</span>
            <span>{item.desc}</span>
          </div>
        })
      }
    </div>
  )
}

export default Index