import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Link to="/project1">Project 1</Link>
        <Link to="/project2">Project 2</Link>
    </header>
  )
}

export default Header