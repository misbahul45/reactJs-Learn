import React from 'react'

const HeaderOption = ({title,Icon,avatar,headerOption,setHeaderOption}) => {
  console.log(headerOption)
  return (
    <div
    onClick={()=>setHeaderOption(title)}
    className="relative py-1 flex flex-col items-center justify-center cursor-pointer w-[70px] group">
        {Icon&&
        <>
          <Icon  className={` ${headerOption===title?"text-slate-900":"text-slate-500"} text-6xl group-hover:text-slate-900 transition-all duration-500`} />
          <h3 className={`${headerOption===title?"text-slate-900":"text-slate-500"} text-xs font-semibold group-hover:text-slate-900 group-hover:scale-105 transition-all duration-500`}>{title}</h3>
          <span className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-700 ${headerOption===title?"scale-100":"scale-0 "} transition-all duration-700`}></span>
        </>
        }
        {avatar&&<img src={avatar} className="w-9 h-9 object-cover rounded-full" />}
    </div>
  )
}

export default HeaderOption