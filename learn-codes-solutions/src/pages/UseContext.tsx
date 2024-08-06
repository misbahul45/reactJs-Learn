import React, { createContext } from 'react'
import Profile from '../components/useContext/Profile';
import SideBar from '../components/useContext/SideBar';

export interface User{
    name:string;
    suscribe:boolean
}

export const DataContext=createContext<User | null>(null)

const UseContext = () => {
    const user={
        name:"bagoo",
        suscribe:true
    }
  return (
    <DataContext.Provider value={user}>
      <Profile />
      <SideBar />
    </DataContext.Provider>
  )
}

export default UseContext
