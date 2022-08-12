import { FC, useEffect, useState } from "react";
import { userDataState, userDataType } from "../../../interfaces/reduxInterfaces";
import { useAuthUserMutation, useGetRefreshTokenQuery } from "../../../redux/api/fetchApi";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from 'react-router-dom'
import SubmitButton from '../../custom/Submit'

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

    const [ getAuthData, { data, isLoading } ] = useAuthUserMutation( {
        fixedCacheKey: 'login-data'
    } )

    const { data: tokenData, isLoading: tokenLoading } = useGetRefreshTokenQuery( {} )

    const navigate = useNavigate()

    useEffect( () => {
        if( !tokenData?.error && !tokenLoading ) navigate( "/" )
    }, [ tokenData, tokenLoading ] )

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
        <SubmitButton onClick={ handleSubmit }>
            { type }
        </SubmitButton>
    )
}

export default Submit