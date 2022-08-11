import { FC, useEffect, useState } from "react";
import { userDataState, userDataType } from "../../../interfaces/reduxInterfaces";
import { useAuthUserMutation } from "../../../redux/api/fetchApi";
import { useAppSelector } from "../../../redux/hooks";

interface SubmitProps {
    type: "login" | "register"
}

const Submit: FC<SubmitProps> = ( { type } ) => {

    const selector = useAppSelector( ( state: userDataState ) => state.userData )
    const [ formError, setFormError ] = useState<typeof selector.error>( {
        email: "",
        password: "",
        username: ""
    } )

    const [ getAuthData ] = useAuthUserMutation( {
        fixedCacheKey: 'login-data'
    } )

    useEffect( () => {
        setFormError( ( prev: any ) => ({...prev, ...selector?.error}) )
    }, [ selector ] )

    const handleSubmit: () => void = () => {
        
        if( 
            type === "login" && formError?.email || formError?.password ||
            type === "register" && formError?.email || formError?.password || formError?.username 
        ) return

        type === "login" ?
        getAuthData({
            body: JSON.stringify( { 
                password: selector?.password,
                email: selector?.email, 
            } 
            ),
            url: '/login',
        }): 
        getAuthData({
            body: JSON.stringify( { 
                email: selector?.email, 
                password: selector?.password,
                username: selector?.username
            } ),
            url: '/signup',
        })
    }

    return (
        <div onClick={ handleSubmit }>
            { type }
        </div>
    )
}

export default Submit