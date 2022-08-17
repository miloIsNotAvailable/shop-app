import { Item } from '@prisma/client'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetItemQuery } from '../../redux/api/fetchApi'
import { styles } from './BuyItemStyles'
import ItemDetails from './ItemDetails'
import ItemImage from './ItemImage'

const BuyItem: FC = () => {

    const { item_id } = useParams()

    const { data, isLoading } = useGetItemQuery( 
    JSON.stringify( {
        id: item_id
    } ) ) as { data: Item, isLoading: boolean }

    return (
        <div className={ styles.wrap_item }>
            { !isLoading && <ItemImage link={ data.image }/> }
            {!isLoading && <ItemDetails { ...data }/>}
        </div>
    )
}

export default BuyItem