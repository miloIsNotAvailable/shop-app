import { FC } from "react";
import LinksMap from "../links/linksMap";
import { styles } from './NavbarStyles'

const Navbar: FC = () => {

    return (
        <div className={ styles.navbar }>
            <LinksMap/>
        </div>
    )
}

export default Navbar