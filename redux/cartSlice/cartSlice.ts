import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addToCartType } from '../../interfaces/reduxInterfaces'
import { categories } from '../../constants/categories'
import { useAppSelector } from '../hooks'
import { RootState } from '../store'

const initialState: addToCartType = {
    item: {
        category: undefined,
        image: undefined,
        createdAt: undefined,
        desc: undefined,
        email: undefined,
        id: undefined,
        price: undefined,
        owner_id: undefined,
        title: undefined,
    }, 
    items: [],
    inCart: false
}

const addToCartSlice = createSlice( {
    name: 'addToCartSlice',
    initialState,
    reducers: {
        addToCart: (
            state: Partial<addToCartType>,
            action: PayloadAction<Partial<addToCartType>>
        ) => {

            const isInCart = !!(action.payload.items && action.payload.items.find( ( { id } ) => id === action.payload.item?.id  ))
            if( isInCart ) {
                state.inCart = isInCart
                return
            }
            
            const cache = typeof window !== "undefined" && localStorage.getItem( "cart" )
            const arr = cache && JSON.parse( cache ) || []

            state.inCart = false
            state.items = action.payload.items || arr
        },
    }
} )

export const { 
    addToCart
} = addToCartSlice.actions

// export const selectCartItems = useAppSelector( ( state: RootState ) => state.addToCart ) 

export default addToCartSlice.reducer