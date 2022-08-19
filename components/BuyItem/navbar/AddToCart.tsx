import { Item } from "@prisma/client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Nullable, useItem } from "../../../contexts/ItemContext";
import SubmitButton from "../../custom/Submit/Submit";

type stateType = Nullable<Item & {email: string}>

const AddToCart: FC = () => {

    const [ addItem, setAddItem ] = useState<stateType[]>( () => {
        const cached = localStorage.getItem( "cart" )
        const arr = cached && JSON.parse( cached )
        return arr || []
    } )
    const [ isInCart, setIsInCart ] = useState<boolean>( false )
    const [ addedToCart, setAddedToCart ] = useState<boolean>( false )

    const item = useItem()
    const { data, isLoading } = useAuth()

    useEffect( () => {
        setIsInCart( !!addItem.find( ( { id } ) => id === item.id ) )
    }, [] )

    useEffect( () => {
        localStorage.setItem( 'cart', JSON.stringify( addItem ) )
        setIsInCart( !!addItem.find( ( { id } ) => id === item.id ) )
    }, [ addItem ] )

    const handleAddItem: () => void = () => {
        setAddedToCart( !addedToCart ) 
    
        !addedToCart && !isInCart && setAddItem( prev => [ ...prev, item ] )
        isInCart && setAddItem( prev => {
            return prev.filter( ( { id } ) => id !== item.id )
        } )
    }

    return (
        <SubmitButton 
            disabled={ isLoading || !data?.cookie || !item?.id }
            onClick={ handleAddItem }
        >
            { addedToCart || isInCart ? "remove from cart" : 'add to cart' }  
        </SubmitButton>
    )
}

export default AddToCart 