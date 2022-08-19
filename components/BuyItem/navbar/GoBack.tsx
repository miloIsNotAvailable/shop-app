import { FC } from "react";
import { useNavigate } from "react-router-dom";

const GoBack: FC = () => {

    const navigate = useNavigate()

    return (
        <div onClick={ () => navigate( -1 ) }>
            go back
        </div>
    )
}

export default GoBack