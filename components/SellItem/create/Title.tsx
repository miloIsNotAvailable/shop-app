import { ChangeEvent, FC, useEffect } from "react";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getDesc, getTitle } from "../../../redux/newItem/newItemSlice";
import Form from "../../custom/Forms";

const Title: FC = () => {

    const dispatch = useAppDispatch()

    const selectDetails = useAppSelector( ( state: newItemState ) => state.newItemData )

    useEffect( () => {
        dispatch( getTitle( {
            title: ""
        } ) ) 
    }, [] )

    const dispatchOnChange: ( e: ChangeEvent<HTMLInputElement> ) => void 
    = e => {
        dispatch( getTitle( {
            title: e.target.value
        } ) )  
    }

    return <Form 
    placeholder={ 'title' }
    type={ "title" }
    onChange={ dispatchOnChange }
    error={ selectDetails.error.title }
    // disabled={ isLoading }
/>
}

export default Title