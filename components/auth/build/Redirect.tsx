import { FC } from "react";
import { Link } from "react-router-dom";

type linkType = "/" | "/signup"
type nameType = "go home" | 'signup'

interface RedirectProps {
    link: Omit<string, linkType> | linkType
    name: Omit<string, nameType> | nameType
}

const Redirect: FC<RedirectProps> = ( {
    link="/",
    name
} ) => {

    return (
        <Link to={ link as string }>
            { name }
        </Link>
    )
}

export default Redirect