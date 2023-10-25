import React from 'react'

const CardPost = (props) => {
  const { PostItem,setReadMore,readMore,setGetId} = props
  return (
      <div className=" bg-slate-100 px-5 py-4 rounded-xl shadow-xl my-2">
        <h1 className="text-4xl font-semibold font-serif capitalize">{PostItem.tittle}</h1>
        <h2 className="text-slate-400 opacity-75">{PostItem.date}</h2>
       <div className="flex gap-1">
          <p>{PostItem.body.substring(0, 80)}</p>
            <span
            onClick={() =>{
              setReadMore(!readMore)
              setGetId(PostItem.id)
            } }
            className="text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-700 transition-all duration-500 z-10">Read More</span>
       </div>
      </div>
  )
}

export default CardPost