import { ChangeEvent, FC, useEffect } from "react";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getDesc, getPrice } from "../../../redux/newItem/newItemSlice";
import Form from "../../custom/Forms";

const Desc: FC = () => {

    const dispatch = useAppDispatch()

    const selectDetails = useAppSelector( ( state: newItemState ) => state.newItemData )

    useEffect( () => {
        dispatch( getDesc( {
            desc: ""
        } ) ) 
    }, [] )

    const dispatchOnChange: ( e: ChangeEvent<HTMLTextAreaElement> ) => void 
    = e => {
        dispatch( getDesc( {
            desc: e.target.value
        } ) )  
    }

    return <Form
        placeholder={ 'description' }
        type={ "description" }
        long={ true }
        onChange={ dispatchOnChange as any }
        // disabled={ isLoading }
        // error={ selectDetails.error.desc }
    />
}

export default Desc