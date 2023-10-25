import React from 'react'
import { useState,useEffect,createContext } from 'react'

const DataContext=createContext({});
const DataProvider = ({children}) => {
  return (
      <DataContext.Provider value={{    }}>
          {children}
       </DataContext.Provider>   
  )
}

export default DataProvider