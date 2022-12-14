import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { useLogout } from "../../../../hooks/useLogout";
import { useAuthUserMutation } from "../../../../redux/api/fetchApi";

const UserLogin: FC = () => {

    const { data, isLoading } = useAuth()
    const [ logoutUser ] = useAuthUserMutation()

    const handleLogout: () => void = () => {
        logoutUser( { 
            body: JSON.stringify( {} ),
            url: '/logout'
         } )
    }

    if( isLoading ) return (
        <div>
            isLoading
        </div>
    )

    return (
        <div>
            { data?.cookie ? 
            <div onClick={ handleLogout }>
                logout
            </div> : 
            <Link to={ "/login" }>
                login
            </Link>
            }
        </div>
    )
}

export default UserLogin