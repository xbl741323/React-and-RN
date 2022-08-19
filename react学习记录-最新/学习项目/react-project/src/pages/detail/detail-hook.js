import React, { useEffect } from "react"
import { useLocation } from 'react-router'

function Detail() {
  const location = useLocation()
  useEffect(() => {
    console.log(location, "location")
  }, [])
  return (
    <div>我是谁？详情页面</div>
  )
}

export default Detail