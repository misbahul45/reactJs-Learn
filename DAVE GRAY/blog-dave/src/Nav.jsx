import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch, navName, setNavName}) => {
  return (
    <nav>
        <form className="w-full max-w-xs">
            <label htmlFor="search" className="flex flex-col gap-1">
                <span className="text-slate-50 text-xs">Search</span>
                <input
                id="search"
                type="text"
                placeholder="Search"
                className="px-3 py-1 rounded-md text-slate-700 outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => setSearch(e.target.value)} />
            </label>
            </form>
            <ul className="flex w-1/2 justify-between">
                <li
                value={"Home"}
                onClick={()=>setNavName("Home")}
                className={`${navName==="Home"?"border-b-2 border-red-500":"hover:border-b-2 hover:border-red-500 transition-all duration-200"} text-white`}>
                    <Link to="/">Home</Link>
                </li>
                <li
                onClick={()=>setNavName("Post")}
                className={`${navName==="Post"?"border-b-2 border-red-500":"hover:border-b-2 hover:border-red-500 transition-all duration-200"} text-white hover:border-b-2 hover:border-red-500 transition-all duration-200`}>
                    <Link to="/post">Post</Link>
                </li>
                <li
                onClick={()=>setNavName("About")}
                className={`${navName==="About"?"border-b-2 border-red-500":"hover:border-b-2 hover:border-red-500 transition-all duration-200"} text-white`}>
                    <Link to="/about">About</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Nav