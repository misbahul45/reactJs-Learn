import React, { useCallback } from 'react'
import Search from './Search'


const allUser=[
    "halo",
    "lontong",
    "bagoo",
    "tayo",
    "vajul",
    "baul",
    "karisma",
    "knixx",
    "uppercase"
]

const DisplayUseCallback = () => {
    const [users, setUsers]=React.useState<string[]>(allUser)

    const onChange=useCallback((text:string)=>{
      if(text){
        setUsers(prev=>prev.filter((user)=>user.includes(text)))
      }else{
        setUsers(allUser)
      }
    },[])

  return (
    <div>
      <Search onChange={onChange} />
      <ul className='mt-4 text-slate-100'>
        {users.map((user)=>(
            <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayUseCallback
