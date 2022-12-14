import { FC } from "react";
import { styles } from "../build/BuyItemStyles";

interface ItemImageProps {
    link: string
} 

const ItemImage: FC<ItemImageProps> = ( { link } ) => {

    return (
        <img 
            className={ styles.item_image }
            src={ link }
        />
    )
}

export default ItemImage