import { DetailedHTMLProps, FC, InputHTMLAttributes, useRef } from "react";
import { useMouse } from "../../../hooks/useMouse";
import { styles } from "./MouseStyles";

type DivProps = DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface MouseProps {
    pageX: number
    pageY: number
    mouseLeft: boolean
    children: JSX.Element | JSX.Element[] | string
}

const Mouse: FC<MouseProps & DivProps> = ( { mouseLeft, pageX, pageY, children, onMouseDown } ) => {

    return (
        <div
            onMouseDown={ onMouseDown }
            className={ styles.mouse }
            style={ {
                left: pageX,
                top: pageY,
                visibility: mouseLeft ? 'collapse' : 'visible'
            } }    
        >
            { children }
        </div>
    )
}

export default Mouse