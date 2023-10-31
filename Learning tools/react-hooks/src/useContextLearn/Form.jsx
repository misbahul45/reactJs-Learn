import React from 'react'
import { useContext } from 'react'
import { parentContext } from './Parent'
const Form =() => {
    const {setFirtsName,setLastName}=useContext(parentContext)
    const handlesaveName=(e)=>{
        e.preventDefault()
        setFirtsName(e.target.firstName.value)
        setLastName(e.target.lastName.value)
    }
  return (
    <form
    onSubmit={handlesaveName}
    className="flex flex-col w-full bg-blue-500 px-5 py-10 gap-2">
            <input
            className="pl-3 py-1 rounded-md w-full outline-none text-white bg-transparent border-2 border-slate-50 placeholder:text-white placeholder:font-semibold"
            type="text" placeholder="FirtsName..." id="firstName" name="firstName" />
            <input
            className="pl-3 py-1 rounded-md w-full outline-none text-white bg-transparent border-2 border-slate-50 placeholder:text-white placeholder:font-semibold"
            type="text" placeholder="LastName...." id="lastName" name="lastName" />
            <button className="bg-red-600 text-white font-semibold w-40 rounded-full py-1 mx-auto hover:bg-red-700 transition-all duration-150"  type="submit">Save</button>
    </form>
  )
}

export default Form