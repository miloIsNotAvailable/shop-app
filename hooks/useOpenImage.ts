import { ChangeEvent, DragEvent } from "react"
import { useAppDispatch } from "../redux/hooks"
import { getImage } from "../redux/newItem/newItemSlice"

type event = DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>

// check for drag evemts
const eventIsDrag = ( e: event ): 
e is DragEvent<HTMLDivElement> => {
    const v = e as DragEvent<HTMLDivElement>

    return !!v.dataTransfer
}

export const useOpenImage: 
() => ( e:event ) => void = () => {

    const dispatch = useAppDispatch()

    return ( e ) => {
        
        const drag = eventIsDrag( e )

        e.preventDefault()
        drag && e.dataTransfer.getData( 'text/plain' )
        const file = drag ? e.dataTransfer.files : e.target.files
        const img = new FileReader()
        console.log( file )

        img.onload = e => {
            if( !e.target?.result ) return
            
            dispatch( getImage( {
                image: e?.target?.result as string
            } ) )
        }
        file && img.readAsDataURL( file[0] )
    }
}