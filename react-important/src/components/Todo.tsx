import React from 'react'
interface Props extends Todo{}
const Todo = ({ id, title, image, desc, isDone }: Props) => {
    return (
        <div className='w-64 p-2 shadow-xl shaodow-slate-800/40 border-2 border-slate-700 rounded flex flex-col justify-between'>
            <div className='flex-1'>
                <h1 className='text-xl font-bold text-slate-100 mb-2 text-center'>{title}</h1>
                <img src={image} alt={title} className='mb-2 w-full min-h-36 max-h-36 object-cover rounded-lg shadow-xl shadow-slate-600/50' />
                <p className='text-slate-200 line-clamp-3'>{desc}</p>
            </div>
            <div className='mt-4 flex gap-2 items-center'>
                <button className={`${isDone ? "bg-green-600 hover:bg-green-700":"bg-orange-600 hover:bg-orange-700"} text-slate-100 px-4 py-2 rounded-full`}>{isDone?"Done":"Not Done"}</button>
                <button className='bg-red-600 text-slate-100 px-4 py-2 roounded-full rounded hover:bg-red-700'>Delete</button>
            </div>
        </div>
    )
}

export default Todo
