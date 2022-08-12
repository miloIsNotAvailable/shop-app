import { createContext, useContext } from 'react'
import { User } from '@prisma/client'

type userDataType = {
    email: string,
    username: string,
    id: string,
}

type contextType = {
    data: {
        decoded: User,
        cookie: string
    } | undefined,
    isLoading: boolean, 
}

export const createAuthContext = createContext<contextType>( {
    isLoading: false,
    data: undefined,
} )

export const AuthContextProvider = createAuthContext.Provider

export const useAuth: () => contextType = () => {

    const context = useContext( createAuthContext )
    return context 
}