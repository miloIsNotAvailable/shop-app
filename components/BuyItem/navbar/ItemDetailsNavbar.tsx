import { FC, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useItem } from "../../../contexts/ItemContext";
import { styles } from "../build/BuyItemStyles";
import AddToCart from "./AddToCart";
import GoBack from "./GoBack";
import Paypal from "./Paypal";

const ItemDetailsNavbar: FC = () => {

    const { data } = useAuth()
    const { email } = useItem()

    if( data?.decoded?.email === email ) return (
        <div className={ styles.item_details_navbar }>   
            <GoBack/>
        </div>
    )

    return (
        <div className={ styles.item_details_navbar }>   
            <AddToCart/>
            <GoBack/>
            <Paypal/>
        </div>
    )
}

export default ItemDetailsNavbar