import { MutableRefObject, useEffect, useState } from "react";

type mouseCoorsType = { 
    pageX: number, 
    pageY: number ,
    mouseLeft: boolean
}

export const useMouse: 
<T extends HTMLDivElement | HTMLAnchorElement>
( ref: MutableRefObject<T | null> ) => [ mouseCoorsType ] 
= ref => {
    
    const [ { pageX, pageY }, setMouseCoords ] = useState( { 
        pageX: 0, 
        pageY: 0 
    } )

    const [ mouseLeft, setMouseLeft ] = useState<boolean>( true )

    useEffect( () => {
        if( ref.current ) ref.current.onmousemove = ( { offsetX, offsetY, pageX, pageY } ) => {
            if( !ref.current ) return
            setMouseLeft( false )
            setMouseCoords( { 
                pageX: pageX - ref.current.offsetLeft - 50,
                pageY: pageY - ref.current.offsetTop - 100
            } )
        }

        if( ref.current ) ref.current.onmouseleave = () => {
            if( !ref.current ) return
            setMouseLeft( true )
        }
    } )

    return [ { pageX, pageY, mouseLeft } ]
}