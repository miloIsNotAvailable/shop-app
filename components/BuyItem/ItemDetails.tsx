import { Item } from "@prisma/client";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./BuyItemStyles";
import ItemDetailsNavbar from "./ItemDetailsNavbar";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, keyof K>>

const ItemDetails: FC<Omit<Item, keyof {image: string}>> = ( {
    category,
    desc,
    id,
    owner_id, 
    price,
    title
} ) => {

    return (
        <div className={ styles.item_details_wrap }>
            <div>
                { title }
            </div>
            <div className={ styles.item_details_desc }>
                { desc || 'no description provided.' }
            </div>
            <div>
                price-${ price }
            </div>
            <ItemDetailsNavbar/>
        </div>
    )
}

export default ItemDetails