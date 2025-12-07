import React from "react";
import { Outlet } from 'react-router'
import Header from "./header";
  
const Layout = () => {
  return <div className="">
    <div className="">
      <Header />
    </div>
    <div className="">
      <Outlet />
    </div>
  </div>
}

export default React.memo(Layout);