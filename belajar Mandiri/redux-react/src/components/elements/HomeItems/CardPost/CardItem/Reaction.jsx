import React from 'react'
import { useDispatch } from 'react-redux'
import { addReactions } from '../../../../../reduxStore/PostsSlice/postSlice'
const Reaction = ({reaction, reactionIcons,postId}) => {
  let hoverColor=''
  let color=''
  const dispatch=useDispatch()

  const handleReaction=(postId,react)=>{
    dispatch(addReactions({postId,react}))
  }
  return (
    <div className="w-full flex justify-between py-1 mt-2 px-1">
      {reaction.map((react)=>{
        if(react.title==="Upvote"){
            hoverColor="hover:bg-green-500"
            color="bg-green-500"
          }else if(react.title==="Comments"){
            hoverColor="hover:bg-cyan-500"
            color="bg-cyan-500"
          }else{
            hoverColor="hover:bg-purple-500"
            color="bg-purple-500"
          }    
          return(
            <button
            onClick={()=>handleReaction(postId,react.title)}
            key={`${react.length}-${react.title}`} className={`flex items-center gap-2 relative p-2 rounded-md ${react.amount===0?`${hoverColor}`:`${color}`} group text-white transition-all duration-500`} >
                {reactionIcons[react.title]}
                <p>{react.amount}</p>
                <p className="absolute left-1/2 -top-10 translate-x-[-50%] px-2 text-slate-900 bg-gray-50 rounded-lg font-eubick font-bold scale-0 translate-y-20 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500">{react.title}</p>
            </button>
          )
      })}
    </div>
  )
}

export default Reaction