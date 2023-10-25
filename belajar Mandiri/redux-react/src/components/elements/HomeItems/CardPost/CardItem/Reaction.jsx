import React from 'react'
const Reaction = ({reaction}) => {
  let color=''
  return (
    <div className="w-full flex justify-between py-1 mt-2 px-1">
      {reaction.map((react)=>{
        if(react.title==="Upvote"){
            color="hover:bg-green-500"
          }else if(react.title==="Comments"){
            color="hover:bg-cyan-900"
          }else{
            color="hover:bg-purple-600"
          }    
          return(
            <button key={`${react.length}-${react.title}`} className={`relative p-2 rounded-md ${color} group text-white transition-all duration-500`} >
                {react.icon}
                <p className="absolute left-1/2 -top-10 translate-x-[-50%] px-2 text-slate-900 bg-gray-50 rounded-lg font-eubick font-bold scale-0 translate-y-20 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500">{react.title}</p>
            </button>
          )
      })}
    </div>
  )
}

export default Reaction