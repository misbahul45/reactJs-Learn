import React from 'react'
import {AiTwotoneFire} from 'react-icons/ai'
import {IoIosArrowUp} from 'react-icons/io'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {RiSearchLine} from 'react-icons/ri'
import Item from './item/item'
const Discover = ({title, open, setClickSideBar, clickSideBar}) => {
  return (
    <div>
        <h3 className={`${open?"hidden":""} text-gray-400 font-bold text-sm ml-2 transition-all duration-500`}>{title}</h3>
        <div>
            <Item content="Popular" Icon={AiTwotoneFire} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
            <Item content="Most Upvoted" Icon={IoIosArrowUp} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
            <Item content="Best discussion" Icon={BsFillChatLeftTextFill} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
            <Item content="Post finder" Icon={RiSearchLine} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
        </div>
    </div>
  )
}

export default Discover