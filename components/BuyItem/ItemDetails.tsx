import { PayPalButtons } from "@paypal/react-paypal-js";
import { Item } from "@prisma/client";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useItem } from "../../contexts/ItemContext";
import { styles } from "./BuyItemStyles";
import ItemDetailsNavbar from "./ItemDetailsNavbar";

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
            <ItemDetailsNavbar email={ email} />
        </div>
    )
}

export default ItemDetails