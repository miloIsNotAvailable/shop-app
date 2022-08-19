import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApi = createApi( {
    reducerPath: 'api',
    tagTypes: [ "refresh", "category" ],
    baseQuery: fetchBaseQuery( { 
        baseUrl: '/api' ,
        method: 'POST',
        body: JSON.stringify( { ye: 'ye' } )
    } ),
    endpoints: ( { mutation, query } ) => ({
        getHello: query( {
            query: () => ( {
                url: '/hello',
                method: 'POST',
                body: JSON.stringify( { ye: 'ye' } )
            } )
        } ),
        getRefreshToken: query( {
            providesTags: [ "refresh" ],
            query: () => ( {
                url: '/refresh_token',
                method: 'POST',
                body: JSON.stringify( {} )
            } )
        } ),
        authUser: mutation<any, { 
            body: string, 
            url: string 
        }>( {
            invalidatesTags: [ "refresh" ],
            query: ( { body, url } ) => ( {
                url: url,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            } )
        } ),
        getNewItem: mutation<any, string>( {
            // invalidatesTags: [ "refresh" ],
            query: ( body ) => ( {
                url: "/sell_item",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            } )
        } ),
        queryCategoryItems: query<any, string>( {
            // invalidatesTags: [ "refresh" ],
            providesTags: [ "category" ],
            query: ( body ) => ( {
                url: "/category_item",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            } )
        } ),

        getItem: query<any, string>( {
            // invalidatesTags: [ "refresh" ],
            query: ( body ) => ( {
                url: "/get_item",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            } )
        } ),

        getPayment: mutation<any, string>( {
            invalidatesTags: [ "category" ],
            query: ( body ) => ( {
                url: "/create_client_payment_intent",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            } )
        } ),
    })
} )

export const { 
    useGetHelloQuery,
    useAuthUserMutation,
    useGetRefreshTokenQuery,
    useGetNewItemMutation,
    useQueryCategoryItemsQuery,
    useGetItemQuery,
    useGetPaymentMutation
} = fetchApi