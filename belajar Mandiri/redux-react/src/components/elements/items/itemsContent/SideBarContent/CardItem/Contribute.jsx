import React from 'react'
import Item from './item/item'
import {AiOutlineLink} from 'react-icons/ai'
import {FiCode} from 'react-icons/fi'
const Contribute = ({title, open, setClickSideBar,clickSideBar}) => {
  return (
    <div>
      <h3 className={`${open?"hidden":""} text-gray-400 font-bold text-sm ml-2 transition-all duration-500`}>{title}</h3>
      <div>
        <Item content="Submit article" Icon={AiOutlineLink} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
        <Item content="Suggest new source" Icon={FiCode} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
      </div>
    </div>
  )
}

export default Contribute