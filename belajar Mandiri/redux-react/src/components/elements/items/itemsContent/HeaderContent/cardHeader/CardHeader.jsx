import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {AiFillSetting} from 'react-icons/ai'
import {BsFillPersonVcardFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const CardHeader = ({ userClick }) => {
  return (
    <div className={`${userClick?"scale-100":"scale-0"} absolute right-0 -bottom-[160px] h-40 w-36 bg-gray-700 rounded-xl border-[1px] border-white transition-all duration-500`}>
        <ul className="h-full flex flex-col justify-between">
            <li className="px-2 py-1 rounded-t-xl hover:bg-gray-600 transition-all duration-500">
              <Link className="h-full flex items-center justify-start gap-2">
                 <CgProfile className="text-white text-2xl" />
                 <p className="text-gray-50 text-sm">Profile</p> 
              </Link>
            </li>
            <li className="px-2 py-1 hover:bg-gray-600 transition-all duration-500">
              <Link className="h-full flex items-center justify-start gap-2">
                 <AiFillSetting className="text-white text-2xl animate-spin" />
                 <p className="text-gray-50 text-xs">Account Details</p> 
              </Link>
            </li>
            <li className="px-2 py-1 hover:bg-gray-600 transition-all duration-500">
              <Link className="h-full flex items-center justify-start gap-2">
                 <BsFillPersonVcardFill className="text-white text-2xl" />
                 <p className="text-gray-50 text-sm">Dev card</p> 
              </Link>
            </li>
            <li className="px-2 py-1 rounded-b-xl hover:bg-gray-600 transition-all duration-500">
              <Link className="h-full flex items-center justify-start gap-2">
                 <BiLogOut className="text-white text-2xl" />
                 <p className="text-gray-50 text-sm">Log Out</p> 
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default CardHeader