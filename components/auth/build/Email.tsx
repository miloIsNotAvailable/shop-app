import { ChangeEvent, FC, useEffect, useRef } from "react";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getUserEmail } from "../../../redux/auth/userDataSlice";
import { userDataState } from "../../../interfaces/reduxInterfaces";
import { styles } from "./FormStyles";
import Form from "../../custom/Forms";

const Email: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )  
    const dispatch = useAppDispatch()

    const selector = useAppSelector( ( state: userDataState ) => state.userData.error?.email )

    useEffect( () => {
        dispatch( getUserEmail( {
            email: undefined
        } ) )
    }, [] )

    const handleDispatch: 
    ( e: ChangeEvent<HTMLInputElement> ) => void 
    = e => {
        // if( !inputRef.current ) return

        dispatch( getUserEmail( {
            email: e.target.value
        } ) )
    }

    return (
        <div className={ styles.input_type_wrap }>
            <Form
                // ref={ inputRef }
                type={ "email" }
                placeholder={ "email" }
                onChange={ handleDispatch }
                error={ selector }
            />
            {/* { selector && 
            <div className={ styles.input_error }>
                { selector }
            </div> } */}
        </div>
    ) 
}

export default Email