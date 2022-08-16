import { FC } from "react";
import { Link } from 'react-router-dom'
import { styles } from "../build/NavbarStyles";
import Categories from "./Categories";

const LinksMap: FC = () => {

    const arr = [
        { name: 'home', link: '/' },
        { name: 'new', link: '/new' },
    ]

    return (
        <div className={ styles.navbar_wrap }>
            {
                arr.map( ( { link, name } ) => (
                    <Link to={ link } key={ name }>
                        { name }
                    </Link>
                ) )
            }
            <Categories/>
        </div>
    )
}

export default LinksMap