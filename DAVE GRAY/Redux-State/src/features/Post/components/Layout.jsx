import { Outlet } from "react-router";
import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
    <Header />
    <div className="">
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default Layout