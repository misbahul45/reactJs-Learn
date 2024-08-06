import React from "react"

interface SearchProps{
    onChange:(text:string)=>void
}
const Search = ({ onChange }:SearchProps) => {
    console.log("search is rendering")
  return (
    <input type="text" placeholder="text..." onChange={(e)=>onChange(e.target.value)} 
     className="pl-4 py-2 rounded w-64 bg-slate-700 text-slate-200"
    />
  )
}

export default React.memo(Search)
