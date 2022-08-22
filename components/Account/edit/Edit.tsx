import { FC, useEffect, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Form from "../../custom/Forms";
import { styles } from "../build/AccountStyles";

const Edit: FC = () => {

    const { data, isLoading } = useAuth()

    return (
        <div className={ styles.wrap_edit }>
            <Form
                editable={ true }
                // placeholder={ data?.decoded.name }
                value={ data?.decoded && data?.decoded.name }
                type={ "name" }
            />
            <Form
                editable={ true }
                // placeholder={ data?.decoded.email }
                value={ data?.decoded && data?.decoded.email }
                type={ "email" }
            />
        </div>
    )
}

export default Edit