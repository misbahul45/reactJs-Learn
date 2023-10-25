import React from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {HiOutlineUserCircle} from 'react-icons/hi'
import CardHeader from './cardHeader/CardHeader'
import { Link } from 'react-router-dom'
const ContentHeader = ({onClick,userClick}) => {
  return (
   <>
      <div>
          <Link to='/' className="flex flex-row-reverse gap-1">
            <h1 className="text-white text-lg font-semibold font-rubik">Daily<span className="text-slate-400 text-sm ml-1">.dev</span></h1>
            <img src="../../../../public/img/logo.svg" alt="logo" className="w-8" />
          </Link>
        </div>
        <div>
            <div className="relative w-[120px] flex justify-end">
               <div className=" absolute top-1 left-0 flex flex-col items-center cursor-pointer group">
                    <IoMdNotificationsOutline  className="text-white text-2xl"/>
                    <p className="scale-0 px-3 py-0.5 rounded-full bg-white group-hover:scale-100 transition-all duration-500 z-50">Notification</p>
               </div>
               <div
               className="relative flex gap-1 items-center group cursor-pointer"
               onClick={onClick}>
                    <h2 className="text-slate-50 font-semibold">0</h2>
                    <HiOutlineUserCircle  className="text-white text-3xl"/>
                    <p className="absolute -left-36 top-0 scale-0 px-3 py-0.5 rounded-full bg-white group-hover:scale-100 transition-all duration-500">Account Profile</p>
               </div>
               <CardHeader userClick={userClick} />
            </div>
        </div>
   </>
  )
}

export default ContentHeader
