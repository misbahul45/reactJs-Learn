import React from 'react'
import Nav from './Nav'
import {AiFillTablet} from 'react-icons/ai'
import { BsFillPhoneFill,BsFillLaptopFill } from 'react-icons/bs'
const Header = ({ search, setSearch, navName, setNavName, width }) => {
  return (
    <header className="bg-blue-400  py-2 px-5 w-full max-w-xl mx-auto">
        <h1 className="text-slate-50 font-bold font-serif text-2xl">React Js Blog</h1>
        {width<768?<BsFillPhoneFill /> : width<992? <AiFillTablet /> : <BsFillLaptopFill />}
        <Nav search={search} setSearch={setSearch} navName={navName} setNavName={setNavName} />
    </header>
  )
}

export default Header