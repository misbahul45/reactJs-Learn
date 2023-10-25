import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import SideBar from './SideBar'
const Layout = () => {
  return (
    <>
        <Header />
        <div className="flex gap-5">
          <SideBar />
          <Outlet />
        </div>
    </>
  )
}

export default Layout