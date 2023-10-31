import React from 'react'
import { parentContext } from './Parent'
import { useContext } from 'react'
const Child2 = () => {
    const {lastName}=useContext(parentContext)
  return (
    <h1>{lastName}</h1>
  )
}

export default Child2