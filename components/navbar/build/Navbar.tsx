import { FC } from "react";
import LinksMap from "../links/linksMap";
import Menu from "../menu/Menu";
import { styles } from './NavbarStyles'
import Cart from '../cart'

const Navbar: FC = () => {

    return (
        <div className={ styles.navbar }>
            <LinksMap/>
            <Cart/>
            <Menu/>
        </div>
    )
}

export default Navbar