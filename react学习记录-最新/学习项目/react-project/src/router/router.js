import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom';
import Index from "../pages/index/index-hook"
import Policy from "../pages/policy/index-hook"
import Classify from "../pages/classify/index-hook"
import Personal from "../pages/personal/index-hook"

function BasicRoute() {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/classify" element={<Classify />}></Route>
      <Route path="/personal" element={<Personal />}></Route>
    </Routes>
  )
}

export default BasicRoute;
