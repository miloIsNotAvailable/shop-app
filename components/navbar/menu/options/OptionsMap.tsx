import { FC } from "react";
import { styles } from "../../build/NavbarStyles";
import Option from "./Options";
import UserLogin from "./UserLogin";

const OptionsMap: FC = () => {

    const arr = [
        { name: 'account', link: '/account' },
        { name: 'sell item', link: '/sell' },
        { name: 'cart', link: '/cart' },
    ]

    return (
        <div className={ styles.menu_popup }>
            {
                arr.map( v => (
                    <Option { ...v }/>
                ) )
            }
            <UserLogin/>
        </div>
    )
}

export default OptionsMap