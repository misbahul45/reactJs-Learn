import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {PiShootingStarFill} from 'react-icons/pi'
import CardPostHome from '../elements/HomeItems/CardPost/CardPostHome'
import { useSelector } from 'react-redux'
import { getAllPost } from '../../reduxStore/PostsSlice/postSlice'
const Home = ({open}) => {
    const Posts=useSelector(getAllPost)
  return (
    <main className={` ${open?"lg:px-16":"lg:px-72"} py-24 relative w-100  h-full bg-slate-950 transition-all duration-700  overflow-y-scroll scrollbar-hide`}>
       <div className="bg-slate-900 px-5">
            <img className="absolute top-0 left-0 w-full max-w-[58.75rem] blur-xl" src="../../../public/img/bg.webp" alt="Gradient background" />
       </div>
       <div className="absolute left-0 w-full flex flex-col gap-5 items-center">
         <div className="relative group">
            <PiShootingStarFill className="absolute left-6 top-1 lg:text-lg text-xs text-slate-200 opacity-50 group-active:opacity-100 group-active:scale-150 group-hover:opacity-100 transition-all duration-500" />
            <AiOutlineSearch className="absolute left-3 top-1/2 transfrom -translate-y-[50%] text-gray-400 text-2xl" />
            <input
            className=" sm:w-[25rem] w-[12rem] pl-12 sm:py-4 py-2 bg-slate-900 rounded-xl text-slate-100  focus:sm:w-[30rem] focus:lg:w-[35rem] focus:w-[18rem] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:shadow-md focus:shadow-gray-700 transition-all duration-500"
            type="text" placeholder="Search....." />
            <PiShootingStarFill className="absolute left-2 bottom-1 lg:text-lg text-xs text-slate-200 opacity-50 group-active:opacity-100 group-active:scale-150 group-hover:opacity-100 transition-all duration-500" />
         </div>
         <div className={`grid ${open?"lg:grid-cols-3 lg:px-32 sm:px-24 lg:gap-12 gap-10 md:grid-cols-2 grid-cols-1 px-10":"lg:grid-cols-2 lg:px-[18rem] lg:gap-15 gap-10 grid-cols-1 px-10"} h-full pb-5 w-full transition-all duration-300 ease-in-out`}>
            {Posts.map((post)=>(
                <CardPostHome post={post} key={post.id} />
            ))}
         </div>
       </div>
    </main>
  )
}

export default Home