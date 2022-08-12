import { FC, useEffect } from "react";
import { useAuthUserMutation } from "../../../redux/api/fetchApi";
import { styles } from "./FormStyles";

const CurrentState: FC = () => {

    const [ getAuthData, { 
        data, 
        isLoading, 
        isError, 
        error
    } ] = useAuthUserMutation( {
        fixedCacheKey: 'login-data'
    } )

    useEffect( () => {
        console.log( data )
        console.log( error )
        console.log( isLoading, isError )
    }, [ data, error, isError, isLoading ] )


    if( isLoading ) return (
        <div className={ styles.login_loading }>
            loading...
        </div>
    )

    if( data?.error ) return (
        <div className={ styles.login_error }>
            { data?.error }
        </div>
    )

    return <></>
}

export default CurrentState