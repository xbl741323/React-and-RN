import React from "react"
import "../../styles/common/nav.css"
import { useNavigate } from "react-router-dom"

function Nav() {
  const navigate = useNavigate()
  const returnPage = () => {
    navigate(-1)
  }
  return (
    <div className="nav">
      <span onClick={(e) => returnPage((e))}></span>
      <span>导航栏</span>
    </div>
  )
}

export default Nav