import { PayPalButtons } from "@paypal/react-paypal-js";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useItem } from "../../../contexts/ItemContext";
import { useGetPaymentMutation } from "../../../redux/api/fetchApi";

const Paypal: FC = () => {

    const navigate = useNavigate()

    const { data } = useAuth()
    const [ getPaymentIntent, { data: paypalData, isLoading: transactionFetching } ] = useGetPaymentMutation()
    const { id, owner_id , email} = useItem()

    const handlePayment = async( data: any, actions: any ) => {
        if( !id ) return
        getPaymentIntent( JSON.stringify( {
           id, owner_id 
        } ) )

        if( !transactionFetching || !paypalData?.error ) navigate( -1 )
        return actions.order.capture()
    }

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

    return (
        <PayPalButtons 
            disabled={ !id || transactionFetching || !data?.cookie }
            style={{ layout: 'horizontal' }}
            createOrder={ handleOrder }
            onApprove={ handlePayment }
    />
    )
}

export default Paypal