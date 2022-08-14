import { ChangeEvent, FC, useEffect } from "react";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getPrice } from "../../../redux/newItem/newItemSlice";
import Form from "../../custom/Forms";

const Price: FC = () => {

    const dispatch = useAppDispatch()

    const selectDetails = useAppSelector( ( state: newItemState ) => state.newItemData )

    useEffect( () => {
        dispatch( getPrice( {
            price: ""
        } ) ) 
    }, [] )

    const dispatchOnChange: ( e: ChangeEvent<HTMLInputElement> ) => void 
    = e => {
        dispatch( getPrice( {
            price: e.target.value
        } ) )  
    }

    return <Form 
        placeholder={ 'price' }
        type={ "price (USD)" }
        // disabled={ isLoading }
        onChange={ dispatchOnChange }
        error={ selectDetails.error.price }
    />
}

export default Price