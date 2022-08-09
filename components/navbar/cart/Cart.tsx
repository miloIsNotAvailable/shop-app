import { FC } from 'react'
import { default as CartIcon } from '../../../graphics/cart.svg'
import { styles } from '../build/NavbarStyles'

const Cart: FC = () => {

    return (
        <div className={ styles.cart }>
            <img src={ CartIcon }/>
        </div>
    )
}

export default Cart