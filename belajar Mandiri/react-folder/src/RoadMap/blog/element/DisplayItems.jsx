import React from 'react'
import {AiFillCloseSquare,AiOutlineAppstoreAdd} from 'react-icons/ai'
const DisplayItems = (props) => {
    const { setDisplay,display, content,reverseContent } = props
  return (
    <div
    onClick={()=>setDisplay(!display)}
    className="absolute bottom-20 right-5 flex flex-col items-center gap-1 group cursor-pointer z-30">
        <p className="text-white bg-slate-800 px-5 py-1 rounded-xl transform translate-y-[70%] scale-0 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500">{display?reverseContent:content}</p>
        {
          display?
            <AiFillCloseSquare className="text-red-500 text-4xl"/>
              :
            <AiOutlineAppstoreAdd className="text-blue-500 text-4xl"/>
        }
    </div>
  )
}

export default DisplayItems