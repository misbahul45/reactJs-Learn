import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getRandomAction } from '../../redux/randomAction/createRandom'
const RandomText = () => {
    const randomtext=useSelector(((state)=>state.createRandom.randomText))
    const index=useSelector((state)=>state.createRandom.index)
    const randomDispatch=useDispatch()
  return (
    <div className="h-screen flex justify-center items-center gap-3">  
        <p>Index :{index}</p>
        <p>Random :{randomtext[index]}</p>
        <button onClick={()=>randomDispatch(getRandomAction())} className="bg-blue-500 px-4 py-2 rounded-md text-white">random</button>
    </div>
  )
}

export default RandomText