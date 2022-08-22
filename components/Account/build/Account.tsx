import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import Edit from "../edit";
import Items from "../items";
import { styles } from "./AccountStyles";

const Account: FC = () => {

    const { data, isLoading } = useAuth()

    const navigate = useNavigate()

    useEffect( () => {
        if( !isLoading && !data?.decoded?.id ) navigate( "/login" )
    }, [ isLoading, data ] )

    return(
        <div className={ styles.account_wrap }>
            <Edit/>
            <Items/>
        </div>
    )
}

export default Account