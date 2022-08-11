import { DOMAttributes, FC, MutableRefObject } from 'react'
import { styles } from './FormStyles'

// :)
type typeType = "email" | "password" | "username"

interface InputProps {
    type: Omit<string, typeType> | typeType
    onChange: DOMAttributes<HTMLInputElement>["onChange"]  
    // ref: MutableRefObject<HTMLInputElement | null>

}

const Input: FC<InputProps> = ( { 
    type,
    onChange,
    // ref
 } ) => {

    return (
        <div className={ styles.input_wrap }>
            <input
                className={ styles.input }
                // ref={ ref }
                type={ type as string }
                placeholder={ type as string }
                onChange={ onChange }
            />
        </div>
    )
}

export default Input