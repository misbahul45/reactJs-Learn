import React from 'react'
import Item from './item/item'
import {FiBookmark,FiSettings} from  'react-icons/fi'
import {MdHistoryToggleOff} from 'react-icons/md'

const Manage = ({title, open, setClickSideBar,clickSideBar}) => {
  return (
    <div>
        <h3 className={`${open?"hidden":""} text-gray-400 font-bold text-sm ml-2 transition-all duration-500`}>{title}</h3>
        <div>
            <Item content="Bookmarks" Icon={FiBookmark} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
            <Item content="History" Icon={MdHistoryToggleOff} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
            <Item content="Customize" Icon={FiSettings} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
        </div>
    </div>
  )
}

export default Manage