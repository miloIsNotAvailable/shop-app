import { FC } from 'react'
import { styles } from '../build/NavbarStyles'

const Menu: FC = () => {

    return (
        <div className={ styles.menu }>
            <svg width="100%" height="100%" viewBox="0 0 56 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="menu">
                    <rect id="Rectangle 4" width="56" height="3" fill="white"/>
                    <rect id="Rectangle 5" y="14" width="56" height="3" fill="white"/>
                    <rect id="Rectangle 6" y="28" width="56" height="3" fill="white"/>
                </g>
            </svg>
        </div>
    )
}

export default Menu