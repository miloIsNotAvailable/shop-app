import { FC } from "react";
import { Link } from "react-router-dom";
import { styles } from "./ItemDisplayStyle";

interface ItemDisplayProps {
    link: string
    title: string
    price: string
    id: string
}

const ItemDisplay: FC<ItemDisplayProps> = ( {
    link,
    price,
    title,
    id
} ) => {

    return (
        <Link 
            to={ `/buy/${ id }` }  
            className={ styles.item_display_wrap }
        >
            <img 
                className={ styles.item_img }
                src={ link }
            />
            <div>
                { title }
            </div>
            <div>
                price-${ price }
            </div>
        </Link>
    )
}

export default ItemDisplay