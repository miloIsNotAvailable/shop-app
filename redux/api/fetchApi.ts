import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApi = createApi( {
    reducerPath: 'api',
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
        } )
    })
} )

export const { useGetHelloQuery } = fetchApi