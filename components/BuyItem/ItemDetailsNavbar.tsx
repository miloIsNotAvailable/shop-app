import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import SubmitButton from "../custom/Submit/Submit";
import { styles } from "./BuyItemStyles";

interface ItemDetailsNavbarProps {
    email: string | undefined
}

const ItemDetailsNavbar: FC<ItemDetailsNavbarProps> = ( { email } ) => {

    const navigate = useNavigate()

    const { data } = useAuth()

    const handleOrder: 
    ( orderData: any, action: any ) => any
    = ( o, a ) => {
        if( !email ) return
        return a.order.create( {
            purchase_units: [
                {
                    amount: {
                        value: '0.01'
                    },
                    payee: {
                        email_address: email
                    }
                }
            ]
        } )
    }

    if( data?.decoded?.email === email ) return (
        <div className={ styles.item_details_navbar }>   
            <div onClick={ () => navigate( -1 )}>
                go back
            </div>
        </div>
    )

    return (
        <div className={ styles.item_details_navbar }>   
            <SubmitButton disabled={ true }>
                add to cart
            </SubmitButton>
            <div onClick={ () => navigate( -1 )}>
                go back
            </div>
            <PayPalButtons 
                style={{ layout: 'horizontal' }}
                createOrder={ handleOrder }
            />
        </div>
    )
}

export default ItemDetailsNavbar