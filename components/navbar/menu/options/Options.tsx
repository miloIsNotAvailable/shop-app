import { FC } from "react";
import { Link } from 'react-router-dom'

interface OptionsProps {
    name: string
    link: string
}

const Option: FC<OptionsProps> = ( {
    link,
    name
} ) => {

    return (
        <Link to={ link }>
            { name }
        </Link>  
    )
}

export default Option