import { User, Item } from "@prisma/client";
import { FC } from "react";
import ItemDisplay from "../custom/ItemDisplay";
import { styles } from "./CategoryStyles";


interface CategoryItemsMapProps {
    arr: Item[]
}

const CategoryItemsMap: FC<CategoryItemsMapProps> = ( { arr } ) => {

    // const arr = Array( 10 ).fill( 0 )  

    return (
        <div className={ styles.item_display_wrap }>
            { arr.map( ( { image, title, price, id } ) => (
            <ItemDisplay 
                id={ id }
                link={ image }
                price={ price }
                title={ title }
                key={ id }
            />
            ) ) }
        </div>
    )
}

export default CategoryItemsMap