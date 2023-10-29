import Header from "../items/Header";
import { Outlet } from "react-router";
import React from 'react'

  const Layout = ({open,setOpen, clickSideBar, setClickSideBar}) => {
  return (
    <>
          <div className="h-screen flex flex-col">
              <Header open={open} setOpen={setOpen} clickSideBar={clickSideBar} setClickSideBar={setClickSideBar} />
              <Outlet />
          </div>
    </>
  )
}

export default Layout