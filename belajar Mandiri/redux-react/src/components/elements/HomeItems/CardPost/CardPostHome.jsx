import React from 'react'
import PostItem from './CardItem/PostItem'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {FiMoreVertical} from 'react-icons/fi'
const CardPostHome = ({post}) => {
  return (
    <div className={`relative bg-gray-900 px-5 pt-5 rounded-xl border-[0.08px] border-slate-800 shadow-2xl hover:shadow-md hover:shadow-white/5 hover:border-[2px] hover:border-slate-700 transition-all duration-500`}>
        <div className="flex justify-between px-5 pt-2 w-full absolute left-0 top-0 group ">
          <div>
            <img src="https://source.unsplash.com/random/?Boy" className="w-8 h-8 object-cover rounded-full" />
          </div>
          <div className="flex gap-1 items-center scale-0 group-hover:scale-100 transition-all duration-500">
            <button className=" flex items-center gap-2 bg-gray-200 px-4 py-1 text-md font-bold rounded-lg font-rubik hover:bg-white/70">
              Read 
              <BsBoxArrowUpRight className="text-lg" />
            </button>
            <FiMoreVertical  className="text-3xl text-gray-300 cursor-pointer"/>
          </div>
        </div>
        <PostItem post={post} />
    </div>
  )
}

export default CardPostHome