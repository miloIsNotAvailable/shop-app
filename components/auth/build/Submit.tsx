import { FC } from "react";
import { userDataState, userDataType } from "../../../interfaces/reduxInterfaces";
import { useAppSelector } from "../../../redux/hooks";

interface SubmitProps {
    type: "login" | "register"
}

const Submit: FC<SubmitProps> = ( { type } ) => {

    const selector = useAppSelector( ( state: userDataState ) => state.userData )

    const handleSubmit: () => void = () => {
        console.log( selector )
    }

    return (
        <div onClick={ handleSubmit }>
            { type }
        </div>
    )
}

export default Submit