import React, { useState } from 'react'
import ContentHeader from './itemsContent/HeaderContent/ContentHeader'
import SideBar from './SideBar'

const Header = ({open,setOpen,clickSideBar,setClickSideBar}) => {
    const [userClick,setUserClick]=useState(false)
    const handleuserClick=()=>{
        setUserClick(!userClick)
    }
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between py-3 px-5 bg-slate-900 border-b-[0.5px] z-50 ">
        <ContentHeader onClick={handleuserClick} userClick={userClick} />
      </header>
      <SideBar open={open} setOpen={setOpen} clickSideBar={clickSideBar} setClickSideBar={setClickSideBar} />
    </>
  )
}

export default Header