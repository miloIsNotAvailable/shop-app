import { FC } from "react";
import { useItem } from "../../../contexts/ItemContext";
import { styles } from "../build/BuyItemStyles";
import ItemDetailsNavbar from "../navbar/ItemDetailsNavbar";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, keyof K>>

const ItemDetails: FC = () => {

    const { desc, price, email, title } = useItem()

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