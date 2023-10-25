import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../Items/Header/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';;
const Header = () => {
  const [headerOption,setHeaderOption]=useState('')
  return (
    <header className="w-full px-16 py-1 flex justify-between items-center ">
        <div className="flex items-center ">
            <img src="../../../public/img/linkedin-icon.svg" alt="" />
            <div className="relative">
                <SearchIcon className="absolute left-2 top-1/2 transform translate-y-[-50%] text-slate-500" />
                <input
                 className="bg-blue-100 pl-9 py-1.5 rounded-md outline-none w-64 focus:w-96 focus:ring-2 focus:ring-slate-900 transition-all duration-500"
                 type="text"
                 placeholder="Search" />
            </div>
        </div>
        <div className="flex gap-2">
            <HeaderOption title="Home" Icon={HomeIcon} headerOption={headerOption} setHeaderOption={setHeaderOption} />
            <HeaderOption title="My NetWork" Icon={PeopleIcon} headerOption={headerOption} setHeaderOption={setHeaderOption} />
            <HeaderOption title="Jobs" Icon={WorkIcon} headerOption={headerOption} setHeaderOption={setHeaderOption} />
            <HeaderOption title="Messaging" Icon={ChatIcon} headerOption={headerOption} setHeaderOption={setHeaderOption} />
            <HeaderOption title="Notifications" Icon={NotificationsIcon} headerOption={headerOption} setHeaderOption={setHeaderOption} />
            <HeaderOption avatar="../../../public/img/PP.jpeg"/>
        </div>
    </header>
  )
}

export default Header