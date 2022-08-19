import { Item } from '@prisma/client'
import { FC, useState } from 'react'
import { Nullable } from '../../../contexts/ItemContext'
import { default as CartIcon } from '../../../graphics/cart.svg'
import { styles } from '../build/NavbarStyles'

type stateType = Nullable<Item & {email: string}>

const Cart: FC = () => {

    const [ addItem, setAddItem ] = useState<stateType[]>( () => {
        const cached = localStorage.getItem( "cart" )
        const arr = cached && JSON.parse( cached )
        return arr || []
    } )

    return (
        <div className={ styles.cart } placeholder={ `${addItem.length}` }>
            <img src={ CartIcon }/>
        </div>
    )
}

export default Cart