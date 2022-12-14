import { Item } from "@prisma/client"
import { Nullable } from "../contexts/ItemContext"

export type userDataType = {
    email?: string
    password?: string
    username?: string
    error?: {
        email: string | undefined
        password: string | undefined
        username: string | undefined
    }
}

export type userDataState = {
    userData: userDataType
}

export type newItemType = {
    title: string 
    category: string 
    desc: string 
    price: string
    image: string
    error: {
        title: string | undefined  
        category: string | undefined 
        desc: string | undefined 
        price: string | undefined  
        image: string | undefined         
    }
}

export type newItemState = {
    newItemData: newItemType
}

export type addToCartType = {
    item: Nullable<Item & {email: string}>,
    items: (Nullable<Item & {email: string}>)[]
    inCart: boolean
}