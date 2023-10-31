import { createContext, useState } from "react"
import Form from "./Form"
import Child1 from "./Child1"
import Child2 from "./Child2"


export const parentContext=createContext(null)
const Parent = () => {
  const [firstName,setFirtsName]=useState('')
  const [lastName,setLastName]=useState('')
  return (
    <div className="w-full max-w-sm">
        <parentContext.Provider value={{firstName,setFirtsName,lastName,setLastName}}>
          <Form />
         <div className="flex gap-1">
            <Child1 />
            <Child2 />
         </div>
        </parentContext.Provider>
    </div>
  )
}

export default Parent