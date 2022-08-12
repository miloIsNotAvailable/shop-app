import { DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useRef } from 'react'
import { styles } from './CustomFormStyles'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { error?: string }

const Form: FC<InputProps> = 
( args: InputProps ) => {

    const ref = useRef<HTMLDivElement | null>( null )
    useEffect( () => {
        if(!ref.current ) return
        ref.current.setAttribute( "error", args?.error || "" )
    }, [ ref.current, args?.error ] )

    return (
        <div 
            ref={ ref }
            className={ styles.form_wrap }
            placeholder={ args.type }   
        >
            <input 
                className={ styles.form }
                { ...args }
            />
        </div>
    )
}

export default Form