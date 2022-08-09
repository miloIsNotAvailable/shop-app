import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApi = createApi( {
    reducerPath: 'api',
    baseQuery: fetchBaseQuery( { 
        baseUrl: '/api' ,
        headers: {
            'Content-Type': 'application/javascript',
            'Accept': 'application/javascript'
        }
    } ),
    endpoints: ( { mutation, query } ) => ({
        getHello: query( {
            query: () => '/hello'
        } )
    })
} )

export const { useGetHelloQuery } = fetchApi