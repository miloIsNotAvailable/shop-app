import { ChangeEvent, FC, FocusEvent, useEffect, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useUpdateUserMutation } from "../../../redux/api/fetchApi";
import Form from "../../custom/Forms";
import { styles } from "../build/AccountStyles";

const Edit: FC = () => {

    const { data, isLoading } = useAuth()
    const [ updateUsername, { isLoading: updatingUsername } ] = useUpdateUserMutation()

    const handleBlur = ( e: FocusEvent<HTMLInputElement> ) => {
        e.target.disabled = true
        if(  !e.target.value?.trim() || e.target.value?.trim() === e.target.defaultValue.trim() || !data?.cookie ) return         
        updateUsername( JSON.stringify( {
            new_username: e.target.value,
            id: data?.decoded.id
        } ) )
        e.target.defaultValue = e.target.value    
        // e.target.defaultValue = e.target.defaultValue
    }

    return (
        <div className={ styles.wrap_edit }>
            <Form
                editable={ true }
                // placeholder={ data?.decoded.name }
                defaultValue={ data?.decoded && data?.decoded.name }
                type={ "name" }
                onBlur={ handleBlur }
            />
            <Form
                editable={ false }
                disabled={ true }
                // placeholder={ data?.decoded.email }
                defaultValue={ data?.decoded && data?.decoded.email }
                type={ "email" }
            />
        </div>
    )
}

export default Edit