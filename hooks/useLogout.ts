import { useAuthUserMutation, fetchApi } from '../redux/api/fetchApi'

export const useLogout: () => () => void = () => {

    const [ logoutUser ] = useAuthUserMutation()

    return () => {
        fetchApi.util.updateQueryData( 
            "getRefreshToken",
            {},
            draft => {
                console.log( draft )
                return draft
            }
         )
        logoutUser( { 
            body: JSON.stringify( {} ),
            url: '/logout'
         } )
    }
}