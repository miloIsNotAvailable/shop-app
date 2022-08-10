import { ChangeEvent, FC, useRef } from "react";
import Input from "./Input";
import { useAppDispatch } from '../../../redux/hooks'
import { getUserPassword } from "../../../redux/auth/userDataSlice";

const Password: FC = () => {

    const inputRef = useRef<HTMLInputElement | null>( null )  
    const dispatch = useAppDispatch()

    const handleDispatch: ( e: ChangeEvent<HTMLInputElement> ) => void = e => {
        // if( !inputRef.current ) return

        dispatch( getUserPassword( {
            password: e.target.value
        } ) )
    }

    return <Input
        // ref={ inputRef }
        type={ "password" }
        onChange={ handleDispatch }
    />
}

export default Password