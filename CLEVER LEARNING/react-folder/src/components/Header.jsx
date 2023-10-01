import React from 'react'
import{GrMenu,GrClose} from "react-icons/gr"
import { useState } from 'react'
function Header() {
    const [menu, setMenu] = useState("menu")
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
  return (
    <header className="py-5 px-3 w-full fixed top-0 left-0 flex justify-between items-center bg-blue-5clear0 z-10 bg-blue-50 lg:bg-transparent">
        <div>
            <a href="#">
            <img src="../../public/img/logo.svg" className="lg-w-auto w-20" />
            </a>
        </div>
        <nav className="translate-y-[-140%] h-[42vh] fixed top-16 left-0 bg-blue-50 w-full lg:scale-100 lg:translate-y-0 lg:w-auto lg:h-auto lg:bg-transparent lg:static lg:px-0 transition-all duration-500 ease-in-out">
            <ul className="w-full h-full flex justify-between  flex-col lg:items-center lg:flex-row lg:gap-5">
                <li className="nav-a-md"><a href="#" className="nav-a group"><span className="nav-a-span md:group-hover:scale-100"></span>Model S</a></li>
                <li className="nav-a-md"><a href="#" className="nav-a group"><span className="nav-a-span md:group-hover:scale-100"></span>Model Y</a></li>
                <li className="nav-a-md"><a href="#" className="nav-a group"><span className="nav-a-span md:group-hover:scale-100"></span>Model 3</a></li>
                <li className="nav-a-md"><a href="#" className="nav-a group"><span className="nav-a-span md:group-hover:scale-100"></span>Model X</a></li>
                <li className="nav-a-md"><a href="#" className="nav-a group"><span className="nav-a-span md:group-hover:scale-100"></span>Solar Panels</a></li>
                <li className="nav-a-md"><a href="#" className="nav-a group"><span className="nav-a-span md:group-hover:scale-100"></span>Accessories</a></li>
            </ul>
        </nav>
        <div className="flex items-center gap-3 lg:gap-5 ">
            <ul className="flex gap-4 ">
                <li><a href="#" className="nav-a lg:text-lg text-sm">shop</a></li>
                <li><a href="#" className="nav-a lg:text-lg text-sm">tesla accounts</a></li>
            </ul>
            <div onClick={handleNavbar} className="lg:hidden">
                {
                    menu==="menu" ? <GrMenu className="text-3xl" /> : <GrClose className="text-3xl " />
                }
            </div>
        </div>
    </header>
  )
}

export default Header