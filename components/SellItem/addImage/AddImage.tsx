import { FC, useEffect } from "react";
import { useOpenImage } from "../../../hooks/useOpenImage";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getImage } from "../../../redux/newItem/newItemSlice";
import { styles } from "../build/SellStyles";

const AddImage: FC = () => {
    
    const handleDrop = useOpenImage()
    const { error, image } = useAppSelector( ( state: newItemState ) => state.newItemData )
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch( getImage( { image: "" } ) )
    }, [] )

    return (
        <div className={ styles.add_image }>
            {image && <img src={ image }/>}
            <input  
                type={ "file" }
                onDrop={ handleDrop }
                onChange={ handleDrop }
                />
            +
        </div>
    )
}

export default AddImage