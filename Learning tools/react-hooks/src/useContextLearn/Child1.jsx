import React from 'react'
import { parentContext } from './Parent'
import { useContext } from 'react'
const Child1 = () => {
    const {firstName}=useContext(parentContext)
  return (
    <h1>{firstName}</h1>
  )
}

export default Child1