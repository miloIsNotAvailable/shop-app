import { Item } from '@prisma/client'
import { AnimatePresence, motion } from 'framer-motion'
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
        <AnimatePresence>
        <div className={ styles.item_display_wrap }>
            { data && data.map( ( { id, price, title, image }, ind: number ) => (
                <motion.div
                    initial={ { opacity: 0, transform: 'translate(0, -100%)' } }
                    animate={ { opacity: 1, transform: 'translate(0, 0%)' } }
                    exit={ { opacity: 0, transform: 'translate(0, -100%)' } }
                    transition={ { 
                        delay: ind * .1
                        } }
                >
                    <ItemDisplay
                        id={ id }
                        link={ image }
                        price={ price }
                        title={ title }
                        key={ id }
                    />
                </motion.div>
            ) ) }
        </div>
        </AnimatePresence>
    )
}

export default New