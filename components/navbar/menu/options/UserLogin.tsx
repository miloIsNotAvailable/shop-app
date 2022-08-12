import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { useLogout } from "../../../../hooks/useLogout";

const UserLogin: FC = () => {

    const { data, isLoading } = useAuth()

    if( isLoading ) return (
        <div>
            isLoading
        </div>
    )

    const logout = useLogout()

    return (
        <div>
            { data?.cookie ? 
            <div onClick={ logout }>
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