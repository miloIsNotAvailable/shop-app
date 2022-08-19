import { Item } from '@prisma/client'
import { createContext, useContext } from 'react'

export type Nullable<T> = {
    [Property in keyof T]: Property | undefined
}

type ItemContextType = Nullable<Item & { email: string }>

const createItemContext = createContext<ItemContextType>( {
    category: undefined, 
    desc: undefined,
    createdAt: undefined,
    email: undefined,
    id: undefined,
    image: undefined,
    owner_id: undefined,
    price: undefined,
    title: undefined
} )

export const ItemProvider = createItemContext.Provider

export const useItem: () => ItemContextType = () => {

    const context = useContext( createItemContext )
    return context
}