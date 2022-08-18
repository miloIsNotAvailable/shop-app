import { Item } from '@prisma/client'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetItemQuery, useGetPaymentMutation } from '../../redux/api/fetchApi'
import { styles } from './BuyItemStyles'
import ItemDetails from './ItemDetails'
import ItemImage from './ItemImage'
import { loadStripe } from '@stripe/stripe-js'
import { PayPalButtons } from '@paypal/react-paypal-js'

const BuyItem: FC = () => {

    const { item_id } = useParams()

    const { data, isLoading } = useGetItemQuery( 
    JSON.stringify( {
        id: item_id
    } ) ) as { data: Item & { email: string | undefined }, isLoading: boolean }

    const handleOrder: 
    ( orderData: any, action: any ) => any
    = ( o, a ) => {
        if( !data?.email ) return
        return a.order.create( {
            purchase_units: [
                {
                    amount: {
                        value: '0.01'
                    },
                    payee: {
                        email_address: data?.email
                    }
                }
            ]
        } )
    }

    return (
        <div className={ styles.wrap_item }>
            { !isLoading && <ItemImage link={ data.image }/> }
            {!isLoading && <ItemDetails { ...data }/>}
        </div>
    )
}

export default BuyItem