import { User, Item } from "@prisma/client";
import { FC } from "react";
import ItemDisplay from "../custom/ItemDisplay";
import { styles } from "./CategoryStyles";
import { AnimatePresence, motion } from 'framer-motion'

interface CategoryItemsMapProps {
    arr: Item[]
}

const CategoryItemsMap: FC<CategoryItemsMapProps> = ( { arr } ) => {

    // const arr = Array( 10 ).fill( 0 )  

    if( arr.length === 0 ) return (
        <div>nothing to see here...</div>
    )

    return (
        <AnimatePresence>
        <div className={ styles.item_display_wrap }>
            { arr.map( ( { image, title, price, id }, ind: number ) => (
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

export default CategoryItemsMap