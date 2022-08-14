import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "../build/NavbarStyles";
import { categories } from '../../../constants/categories'

const Categories: FC = () => {

    return (
        <div className={ styles.categories } tabIndex={ 0 }>
            categories
            <div className={ styles.category_list }>
                {
                    categories.map( link => (
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