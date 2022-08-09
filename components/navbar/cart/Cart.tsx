import { FC } from 'react'
import { default as CartIcon } from '../../../graphics/cart.svg'

const Cart: FC = () => {

    return (
        <div>
            <img src={ CartIcon }/>
        </div>
    )
}

export default Cart