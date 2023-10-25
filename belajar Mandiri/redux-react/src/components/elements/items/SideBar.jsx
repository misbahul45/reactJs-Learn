import React from 'react'
import CardSide from './itemsContent/SideBarContent/CardSide'
import {CgProfile} from 'react-icons/cg'
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from 'react-icons/bs'
import { useState } from 'react'

const SideBar = ({open,setOpen}) => {
  const[clickSideBar,setClickSideBar]=useState("feed")
  return (
    <aside className="z-10 h-full absolute top-0 left-0">
       <div
       onClick={()=>setClickSideBar("feed")}
       className={` relative ${open?"pt-24":"w-64 pt-20"} bg-slate-900 overflow-y-scroll h-full border-r-[1px] border-slate-50 scrollbar-hide transition-all duration-500 group`}>
          <div className={`${open?"px-2":"px-5"} flex items-center  ${clickSideBar==="feed"?"bg-gray-600":""} py-1 gap-2 cursor-pointer text-white transition-all duration-500`}>
            <CgProfile  className={`${open?"lg:text-3xl":"text-2xl"} text-white transition-all duration-500`}/>
            <h2 className={`${open?"hidden":"block"} text-white text-sm font-semibold font-rubik`}>My feed</h2>
          </div>
          <div className="flex flex-col h-full min-h-screen justify-between mt-6 pb-5">
              <div className="flex flex-col gap-7">
                <CardSide title="Squads" open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
                <CardSide title="Discover" open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
                <CardSide title="Contribute" open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
                <CardSide title="Manage" open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
              </div>
          </div>
          <div
          onClick={()=>setOpen(!open)}
          className={`absolute right-0 ${open?"top-14":"top-16"} text-white transition-all duration-500`}>
            {open?<BsFillArrowRightSquareFill  className="text-2xl text-white cursor-pointer scale-0 group-hover:scale-100"/>:<BsFillArrowLeftSquareFill className="text-2xl text-white cursor-pointer scale-0 group-hover:scale-100" />}
          </div>
       </div>
    </aside>
  )
}

export default SideBar
