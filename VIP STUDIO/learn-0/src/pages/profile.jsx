import React from 'react'
import { getUsername } from '../services/auth.service'
const profile = () => {
    const username=getUsername()
  return (
    <div>{username}</div>
  )
}

export default profile