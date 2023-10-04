import React from 'react'
import{GrMenu,GrClose,} from "react-icons/gr"
import {BsChevronDoubleLeft} from "react-icons/bs"
import {AiOutlineDoubleRight} from "react-icons/ai"
import { useState } from 'react'


function Header() {
    const [menu, setMenu] = useState("menu")
    const[sidebar, setSidebar] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const handleNavbar=()=>{
        const navbar=document.querySelector("nav")
        if(menu==="menu"){
            setMenu("close")
            navbar.classList.remove("translate-y-[-140%]")
        }else{
            setMenu("menu")
            navbar.classList.add("translate-y-[-140%]")
        }
    }
    const handleSidebar=()=>{
        setSidebar(!sidebar)
    }
    const handleDarkMode=()=>{
        setDarkMode(!darkMode)
    }
  return (
    <header className={`max-h-[70px] py-5 px-7 w-full fixed top-0 left-0 flex justify-between items-center  z-10  transition-all duration-500 ease-in-out ${darkMode?"bg-black":"bg-blue-50"}`}>
        <div>
            {
                darkMode?
                <h1 className="text-white uppercase font-bold text-3xl font-PlayfairDisplay">Tesla</h1>
                :
                <a href="#">
                    <img src="../../public/img/logo.svg" className="lg-w-auto sm:w-20 w-15 " />
                </a>
            }
        </div>
           <nav className={`translate-y-[-140%] h-[42vh] fixed top-16 left-0  w-full lg:scale-100 lg:translate-y-0 lg:w-auto lg:h-auto lg:bg-transparent lg:static lg:px-0 transition-all duration-500 ease-in-out ${darkMode?"bg-black":"bg-blue-50"}`}>
                <ul className="w-full h-full flex justify-between  flex-col lg:items-center lg:flex-row lg:gap-5 z-index-20">
                    <li className="nav-a-md"><a href="#" className={`nav-a group ${darkMode?"text-white":"text-black"} transition-all duration-500`}><span className="nav-a-span md:group-hover:scale-100"></span>Model S</a></li>
                    <li className="nav-a-md"><a href="#" className={`nav-a group ${darkMode?"text-white":"text-black"} transition-all duration-500`}><span className="nav-a-span md:group-hover:scale-100 "></span>Model Y</a></li>
                    <li className="nav-a-md"><a href="#" className={`nav-a group ${darkMode?"text-white":"text-black"} transition-all duration-500`}><span className="nav-a-span md:group-hover:scale-100"></span>Model 3</a></li>
                    <li className="nav-a-md"><a href="#" className={`nav-a group ${darkMode?"text-white":"text-black"} transition-all duration-500`}><span className="nav-a-span md:group-hover:scale-100"></span>Model X</a></li>
                    <li className="nav-a-md"><a href="#" className={`nav-a group ${darkMode?"text-white":"text-black"} transition-all duration-500`}><span className="nav-a-span md:group-hover:scale-100"></span>Solar Panels</a></li>
                    <li className="nav-a-md"><a href="#" className={`nav-a group ${darkMode?"text-white":"text-black"} transition-all duration-500`}><span className="nav-a-span md:group-hover:scale-100"></span>Accessories</a></li>
                </ul>
            </nav>
            <div className="flex items-center gap-3 lg:gap-5 ">
                <ul className="flex justify-between gap-2 sm:gap-4">
                    <li><a href="#" className={`nav-a lg:text-lg sm:text-sm text-[12px] ${darkMode?"text-white":"text-black"} transition-all duration-500`}>shop</a></li>
                    <li><a href="#" className={`nav-a lg:text-lg sm:text-sm text-[12px] ${darkMode?"text-white":"text-black"} transition-all duration-500`}>accounts</a></li>
                </ul>
                <div className="relative">
                    <div onClick={handleNavbar} className="lg:hidden cursor-pointer">
                        {
                            menu==="menu" ? <GrMenu className="sm:text-3xl text-lg" /> : <GrClose className="sm:text-3xl text-lg " />
                        }
                    </div>
                    <div className="fixed top-[64px]  right-0 z-[-1] h-[100%]  lg:z-20">
                        <div>
                            <div onClick={handleSidebar} className={`absolute top-2 ${sidebar ? "right-7" : "-left-[15%] lg:-left-[10%] sm:-left-[12%]"} group cursor-pointer px-2 py-2 hover:bg-gray-100 hover: rounded-full transition-all duration-500 ${sidebar ?"bg-slate-800":"bg-gray-500"}`}>
                                 <p className=" scale-0 text-sm absolute top-[-35px] left-[-50px] text-slate-50 bg-gray-400 px-3 py-0.5 rounded-sm uppercase font-Gabarito font-thin group-hover:scale-100 transition-all duration-500">Inventory</p>
                                <div>
                                    {
                                        sidebar ? <BsChevronDoubleLeft className="text-sm lg:text-lg text-white group-hover:text-slate-900" /> : <AiOutlineDoubleRight className="text-sm lg:text-lg text-white group-hover:text-slate-900" />
                                    }
                                </div>
                            </div>
                            <div className={`flex flex-col justify-between ${darkMode?"bg-black":"bg-blue-50"} h-[100vh] w-60 sm:w-[40vw] lg:w-[30vw] px-4 py-12 ${sidebar ? "translate-x-[100%]" : "translate-x-[0]"} transition-all duration-500`}>
                                <ul className="h-[80%] lg:h-[80%] sm:h-[90%] w-full flex flex-col justify-between items-end">
                                    <li className="sidenav-li"><a href="#">pajero</a></li>
                                    <li className="sidenav-li"><a href="#">Monster</a></li>
                                    <li className="sidenav-li"><a href="#">Avanza</a></li>
                                    <li className="sidenav-li"><a href="#">Avanza</a></li>
                                    <li className="sidenav-li"><a href="#">Ferari</a></li>
                                    <li className="sidenav-li"><a href="#">Marcedes</a></li>
                                    <li className="sidenav-li"><a href="#">Agya</a></li>
                                    <li className="sidenav-li"><a href="#">Civic</a></li>
                                </ul>
                                <div className="h-[20vh]">
                                    <div className={`ml-auto mt-3 flex w-[160px] justify-between items-center text-xl capitalize font-semibold ${darkMode?"text-white":"text-black"}`}>
                                        dark 
                                        <div onClick={handleDarkMode} className={`flex items-center w-[40px] h-[18px] bg-gray-400 rounded-full cursor-pointer  ${darkMode ? "justify-start bg-white" : "bg-black justify-end"}   `}>
                                            <div className={ `${darkMode ? "bg-black" : "bg-white"} w-4 h-4 rounded-full`}></div>
                                        </div>
                                        light 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </header>
  )
}

export default Header