import { Item } from '@prisma/client'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link
            to={ "/cart" } 
            className={ styles.cart } 
            placeholder={ `${addItem.length}` }
        >
            <img src={ CartIcon }/>
        </Link>
    )
}

export default Cart