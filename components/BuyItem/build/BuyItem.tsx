import { Item } from '@prisma/client'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemProvider, Nullable } from '../../../contexts/ItemContext'
import { useGetItemQuery } from '../../../redux/api/fetchApi'
import { styles } from './BuyItemStyles'
import ItemDetails from '../details/ItemDetails'
import ItemImage from '../details/ItemImage'

const BuyItem: FC = () => {

    const { item_id } = useParams()

    const { data, isLoading } = useGetItemQuery( 
    JSON.stringify( {
        id: item_id
    } ) )

    return (
        <ItemProvider value={ data as Nullable<Item & { email: string }> }>
            <div className={ styles.wrap_item }>
                { !isLoading && <ItemImage link={ data.image }/> }
                {!isLoading && <ItemDetails />}
            </div>
        </ItemProvider>
    )
}

export default BuyItem