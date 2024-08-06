import React from 'react'
import { DataContext, User } from '../pages/UseContext'

const useUserContext = () => {
    const user=React.useContext(DataContext)
    if(!user){
        throw new Error("user s null")
    }
    return user as User
}

export default useUserContext
