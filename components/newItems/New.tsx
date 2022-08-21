import { Item } from '@prisma/client'
import { FC } from 'react'
import { useGetNewestQuery } from '../../redux/api/fetchApi'
import ItemDisplay from '../custom/ItemDisplay'
import { styles } from './NewStyles'

const New: FC =() => {
    
    const { data, isLoading } = useGetNewestQuery( JSON.stringify( {} ) ) as { data: Item[], isLoading: boolean }  

    if( isLoading ) return (
        <div>
            loading data...
        </div>
    )

    return (
        <div className={ styles.item_display_wrap }>
            { data && data.map( ( { id, price, title, image } ) => (
                <ItemDisplay
                    id={ id }
                    link={ image }
                    price={ price }
                    title={ title }
                    key={ id }
                />
            ) ) }
        </div>
    )
}

export default New