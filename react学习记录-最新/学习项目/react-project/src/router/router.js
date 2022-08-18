import React from "react"
import { Route, Routes, useRoutes } from 'react-router-dom';
import Index from "../pages/index/index-hook"
import Policy from "../pages/policy/index-hook"
import Classify from "../pages/classify/index-hook"
import ChildOne from "../pages/classify/child-one-hook"
import ChildTwo from "../pages/classify/child-two-hook"
import Personal from "../pages/personal/index-hook"
import Deatil from "../pages/detail/detail-hook"

function BasicRoute() {
  // 使用useRoutes转换路由表
  return useRoutes([
    {
      path: "/",
      element: <Index />
    },
    {
      path: "/policy",
      element: <Policy />
    },
    {
      path: "/classify",
      element: <Classify />,
      children: [
        {
          path: "child-one",
          element: <ChildOne />
        },
        {
          path: "child-two",
          element: <ChildTwo />
        }
      ]
    },
    {
      path: "/personal",
      element: <Personal />
    },
    {
      path: "/detail",
      element: <Deatil />,
    }
  ])

  // 上面等同于下面
  // return (
  //   <Routes>
  //     <Route path="/" element={<Index />}></Route>
  //     <Route path="/policy" element={<Policy />}></Route>
  //     <Route path="/classify" element={<Classify />}>
  //       <Route path="child-one" element={<ChildOne />}></Route>
  //       <Route path="child-two" element={<ChildTwo />}></Route>
  //     </Route>
  //     <Route path="/personal" element={<Personal />}></Route>
  //   </Routes>
  // )
}

export default BasicRoute;
