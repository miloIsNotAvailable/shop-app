import { ChangeEvent, FC, useEffect, useRef } from "react";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getUserUsername } from "../../../redux/auth/userDataSlice";
import { userDataState } from "../../../interfaces/reduxInterfaces";
import { styles } from "./FormStyles";
import Form from "../../custom/Forms";

const Username: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )  
    const dispatch = useAppDispatch()

    const selector = useAppSelector( ( state: userDataState ) => state.userData.error?.username )

    useEffect( () => {
        dispatch( getUserUsername( {
            username: undefined
        } ) )
    }, [] )

    const handleDispatch: 
    ( e: ChangeEvent<HTMLInputElement> ) => void 
    = e => {
        // if( !inputRef.current ) return

        dispatch( getUserUsername( {
            username: e.target.value
        } ) )
    }

    return (
        <div className={ styles.input_type_wrap }>
            <Form
                // ref={ inputRef }
                type={ "username" }
                placeholder={ "username" }
                error={ selector }
                onChange={ handleDispatch }
            />
            {/* { selector && 
            <div className={ styles.input_error }>
                { selector }
            </div> } */}
        </div>
    ) 
}

export default Username