import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col w-full gap-2 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 px-5 py-2  mx-auto">
        <div>
           <h1 className="text-white font-serif font-semibold text-2xl">
              XnineTzy <span className="text-xl ">Blog</span>
           </h1>
        </div>
        <nav className="flex sm:flex-row flex-col  gap-6 justify-between items-center bg-gradient-to-tr from-white/20 to-red-500  px-3 py-4 shadow-lg rounded-xl ">
          <input type="text" name="" id="" placeholder="Search" className="px-3 py-1 rounded-2xl w-full border-2 border-blue-400 text-slate-50 focus:bg-blue-800 focus:border-2 focus:border-white outline-none focus:placeholder:text-slate-50 text-[15px]" />
          <ul className=" flex justify-between w-full">
            <li className={`bg-blue-500 relative flex-1 rounded-t-lg text-slate-50 py-1 text-center cursor-pointer group px-2 hover:bg-blue-500 transition-all duration-500 ease-in-out`}><span className="absolute w-0 border-b-2 border-cyan-400 left-0 bottom-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>Home</li>
            <li className={`relative flex-1 rounded-t-lg text-slate-50 py-1 text-center cursor-pointer group px-2 hover:bg-blue-500 transition-all duration-500 ease-in-out`}><span className="absolute w-0 border-b-2 border-cyan-400 left-0 bottom-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>About</li>
            <li className={`relative flex-1 rounded-t-lg text-slate-50 py-1 text-center cursor-pointer group px-2 hover:bg-blue-500 transition-all duration-500 ease-in-out`}><span className="absolute w-0 border-b-2 border-cyan-400 left-0 bottom-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>Product</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header