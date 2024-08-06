import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full absolute top-0 left-0 flex gap-4 justify-center items-center'>
      <Link to={'/usecontext'} className='text-lg font-semibold text-slate-100'>Use Context</Link>
      <Link to={'/usecallback'} className='text-lg font-semibold text-slate-100'>Use Callback</Link>
    </header>
  )
}

export default Navbar
