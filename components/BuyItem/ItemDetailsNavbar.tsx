import { FC } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../custom/Submit/Submit";
import { styles } from "./BuyItemStyles";

const ItemDetailsNavbar: FC = () => {

    const navigate = useNavigate()

    return (
        <div className={ styles.item_details_navbar }>   
            <SubmitButton disabled={ true }>
                buy now
            </SubmitButton>
            <div onClick={ () => navigate( -1 )}>
                go back
            </div>
        </div>
    )
}

export default ItemDetailsNavbar