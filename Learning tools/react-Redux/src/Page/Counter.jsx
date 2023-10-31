import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
const Counter = () => {
    const counterValue =useSelector((state)=>state.counter.value)
    console.log(counterValue)
  return (
    <div>counter</div>
  )
}

export default Counter