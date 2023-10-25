import React from 'react'

import {PiDiamondsFourBold} from 'react-icons/pi'
import {BsPlusCircleFill} from 'react-icons/bs'
import Item from './item/item'
const Squads = ({title, open, setClickSideBar, clickSideBar}) => {
  return (
    <div>
      <h3 className={`${open?"hidden":""} text-gray-400 font-bold text-sm ml-2 transition-all duration-500`}>{title}</h3>
      <div>
        <Item content="Public Squads" Icon={PiDiamondsFourBold} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
        <Item content="New Squads" Icon={BsPlusCircleFill} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
      </div>
    </div>
  )
}

export default Squads