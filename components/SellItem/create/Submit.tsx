import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import SubmitButton from "../../custom/Submit/Submit";
import { styles } from "../build/SellStyles";

const Submit: FC = () => {

    const { error, category, desc, price, title } = useAppSelector( ( state: newItemState ) => state.newItemData )

    const handleSubmit: () => void = () => {
        console.log( category, desc, price, title )
    }

    return (
        <div className={ styles.submit_wrap }>
            <SubmitButton 
                onClick={ handleSubmit }
                content="hello"
                disabled={ !!error?.category || !!error?.title || !!error?.price }
            />
            <Link to={ "/" }>
                go back
            </Link>
        </div>
    )
}

export default Submit