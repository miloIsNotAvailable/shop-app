import { ChangeEvent, FC, useEffect } from "react";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getCategory } from "../../../redux/newItem/newItemSlice";
import Form from "../../custom/Forms";

const ItemCategory: FC = () => {

    const dispatch = useAppDispatch()

    const selectDetails = useAppSelector( ( state: newItemState ) => state.newItemData )

    useEffect( () => {
        dispatch( getCategory( {
            category: ""
        } ) ) 
    }, [] )

    const dispatchOnChange: ( e: ChangeEvent<HTMLInputElement> ) => void 
    = e => {
        dispatch( getCategory( {
            category: e.target.value
        } ) )  
    }

    return <Form 
        placeholder={ 'price' }
        type={ "price (USD)" }
        // disabled={ isLoading }
        onChange={ dispatchOnChange }
        error={ selectDetails.error.category }
    />
}

export default ItemCategory