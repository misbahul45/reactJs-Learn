import React from 'react'

const Buttons = (props) => {
    const { buttonText, reqType, setreqtype }=props
  return (
    <button
    className={`${buttonText === reqType ? "flex-1 bg-blue-500 px-5 py-2 text-slate-50 text-2xl font-serif font-semibold  transition-all duration-500" :"flex-1 text-slate-900 text-2xl font-semibold font-serif hover:bg-blue-500 hover:text-slate-50 transition-all duration-500"}`}
    type='button'
    onClick={()=>setreqtype(buttonText)}
    >
       {buttonText}
    </button>
  )
}

export default Buttons