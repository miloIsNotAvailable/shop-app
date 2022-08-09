import { FC } from "react";
import { styles } from "../../build/NavbarStyles";
import Option from "./Options";

const OptionsMap: FC = () => {

    const arr = [
        { name: 'login', link: '/login' },
        { name: 'cart', link: '/cart' },
    ]

    return (
        <div className={ styles.menu_popup }>
            {
                arr.map( v => (
                    <Option { ...v }/>
                ) )
            }
        </div>
    )
}

export default OptionsMap