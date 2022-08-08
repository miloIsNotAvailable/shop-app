import { FC } from 'react'
import { styles } from '../build/HomeStyles'  
import { motion } from 'framer-motion'

const Title: FC = () => {

    return (
        <div className={ styles.title }>
            <motion.div
                transition={ {
                    duration: 1,
                    ease: [ 0.735, 0.525, 0.245, 0.920 ]
                } }
                initial={ { transform: 'translate( 0, 100% )', opacity: 0 } }
                animate={ { transform: 'translate( 0, 0% )', opacity: 1 } }
                exit={ { transform: 'translate( 0, 100% )', opacity: 0 } }
            >
                LOREM IPSUM.
            </motion.div>
        </div>
    )
}

export default Title