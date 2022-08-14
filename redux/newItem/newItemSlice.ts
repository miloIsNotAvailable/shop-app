import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { newItemType } from '../../interfaces/reduxInterfaces'
import { categories } from '../../constants/categories'

const initialState: newItemType = {
    category: "",
    desc: "",
    price: "",
    title: "",
    error: {
        category: undefined,
        desc: undefined,
        price: undefined,
        title: undefined,
    }
}

const newItemSlice = createSlice( {
    name: 'newItemSlice',
    initialState,
    reducers: {
        getTitle: (
            state: Partial<newItemType>,
            action: PayloadAction<Partial<newItemType>>
        ) => {
            if( !action.payload.title ) {
                state.error!.title = 'provide title'
                return
            }
            
            state.error!.title = undefined
            state.title = action.payload.title
        },

        getPrice: (
            state: Partial<newItemType>,
            action: PayloadAction<Partial<newItemType>>
        ) => {
            const valid = action.payload.price
            if( !valid ) {
                state.error!.price = 'provide price'
                state.price = ""
                return
            }
            state.error!.price = undefined
            state.price = action.payload.price
        },

        getDesc: (
            state: Partial<newItemType>,
            action: PayloadAction<Partial<newItemType>>
        ) => {
            // const valid = action.payload.desc
            // if( !valid ) {
            //     state.error!.desc = 'provide description'
            //     state.desc = ""
            //     return
            // }
            state.error!.desc = undefined
            state.desc = action.payload.desc
        },

        getCategory: (
            state: Partial<newItemType>,
            action: PayloadAction<Partial<newItemType>>
        ) => {
            const valid = categories.find( category => category === action.payload.category )
            
            if( !action.payload.category ) {
                state.error!.category = 'provide category'
                state.category = ""
                return
            }

            if( !valid ) {
                state.error!.category = 'invalid category'
                state.category = ""
                return
            }
            
            state.error!.category = undefined
            state.category = action.payload.category
        },
    }
} )

export const { 
    getCategory,
    getPrice,
    getTitle,
    getDesc
} = newItemSlice.actions

export default newItemSlice.reducer