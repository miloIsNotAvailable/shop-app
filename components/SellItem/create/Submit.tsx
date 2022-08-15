import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useGetNewItemMutation } from "../../../redux/api/fetchApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import SubmitButton from "../../custom/Submit/Submit";
import { styles } from "../build/SellStyles";

const Submit: FC = () => {

    const { error, category, desc, price, title, image } = useAppSelector( ( state: newItemState ) => state.newItemData )
    const { data } = useAuth()

    const [ getNewItem, { data: itemData, isLoading } ] = useGetNewItemMutation()

    useEffect( () => {
        console.log( itemData )
    }, [ itemData ] )

    const handleSubmit: () => void = () => {
        
        getNewItem( JSON.stringify( {
            category, 
            desc, 
            price, 
            title,
            image,
            id: data?.decoded?.id
        } ) )
        // console.log( category, desc, price, title, image )
    }

    return (
        <div className={ styles.submit_wrap }>
            <SubmitButton 
                onClick={ handleSubmit }
                content={ isLoading ? "submitting" : "submit" }
                disabled={ 
                    !!error?.category || 
                    !!error?.title || 
                    !!error?.price || 
                    !data?.cookie ||
                    !!error.image
                }
            />
            <Link to={ "/" }>
                go back
            </Link>
        </div>
    )
}

export default Submit