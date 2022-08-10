import { ChangeEvent, FC, useRef } from "react";
import Input from "./Input";
import { useAppDispatch } from '../../../redux/hooks'
import { getUserEmail } from "../../../redux/auth/userDataSlice";

const Email: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )  
    const dispatch = useAppDispatch()

    const handleDispatch: 
    ( e: ChangeEvent<HTMLInputElement> ) => void 
    = e => {
        // if( !inputRef.current ) return

        dispatch( getUserEmail( {
            email: e.target.value
        } ) )
    }

    return <Input
        // ref={ inputRef }
        type={ "email" }
        onChange={ handleDispatch }
    />
}

export default Email