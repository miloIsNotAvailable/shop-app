import { Item } from "@prisma/client";
import { FC, useState } from "react";
import { Nullable } from "../../contexts/ItemContext";
import ItemDisplay from "../custom/ItemDisplay";
import { styles } from "./CartStyles";

type stateType = NonNullable<Item & {email: string}>

const CartItems: FC = () => {

    const [ addItem, setAddItem ] = useState<stateType[]>( () => {
        const cached = localStorage.getItem( "cart" )
        const arr = cached && JSON.parse( cached )
        return arr || []
    } )

    return (
        <div>
            <div className={ styles.cart_title }>
                cart
            </div>
            <div className={ styles.item_display_wrap }>
                { 
                    !!addItem.length ? addItem.map( ( { id, price, image, title } ) => (
                        <ItemDisplay
                            id={ id }
                            link={ image }
                            price={ price }
                            title={ title }
                            key={ id }
                        />
                    ) ) :
                    <div>no items in cart</div>
                }
            </div>
        </div>
    )
}

export default CartItems