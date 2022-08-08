import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "../build/NavbarStyles";

const Categories: FC = () => {

    const links = [ 'computers', 'desks', 'computer_accessories', 'plants', 'paint', 'beds' ]

    return (
        <div className={ styles.categories } tabIndex={ 0 }>
            categories
            <div className={ styles.category_list }>
                {
                    links.map( link => (
                        <Link 
                            to={ "/" + link }
                            className={ styles.category_item }
                        >
                            { link }
                        </Link>
                    ) )
                }
            </div>
        </div>
    )
}

export default Categories