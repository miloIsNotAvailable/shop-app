import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApi = createApi( {
    reducerPath: 'api',
    tagTypes: [ "refresh" ],
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
        } )
    })
} )

export const { 
    useGetHelloQuery,
    useAuthUserMutation,
    useGetRefreshTokenQuery
} = fetchApi