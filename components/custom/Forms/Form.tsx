import { DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useRef } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { styles } from './CustomFormStyles'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { error?: string }
type TextAreaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & { error?: string }
type editable = { editable?: boolean, long?: boolean }

type combined = (InputProps & editable)

const Form: FC<combined> = 
( args: combined ) => {

    const ref = useRef<HTMLDivElement | null>( null )
    const inputRef = useRef<HTMLInputElement | null>( null )

    const { data, isLoading } = useAuth()

    useEffect( () => {
        if(!ref.current ) return
        ref.current.setAttribute( "error", args?.error || "" )
    }, [ ref.current, args?.error ] )

    const handleFocus: (  ) => void = () => {
        if( !inputRef.current || !args.editable ) return
        inputRef.current.disabled = false
    }

    if( args.long ) return (
        <div 
            ref={ ref }
            className={ styles.form_wrap }
            placeholder={ args.type }   
        >
            <textarea
                
                // ref={ inputRef }
                disabled={ isLoading || args.editable }
                // onBlur={ () => {
                //     if( !inputRef.current || !args.editable ) return 
                //     inputRef.current.disabled = true
                // } }
                className={ styles.form }
                { ...args as TextAreaProps }
            />
            { 
            args.editable && 
                <div onClick={ handleFocus }>
                    edit
                </div> 
            }
        </div>
    )

    return (
        <div 
            ref={ ref }
            className={ styles.form_wrap }
            placeholder={ args.type }   
        >
            <input 
                ref={ inputRef }
                disabled={ isLoading || args.editable }
                onBlur={ () => {
                    if( !inputRef.current || !args.editable ) return 
                    inputRef.current.disabled = true
                } }
                className={ styles.form }
                { ...args as combined | InputProps }
            />
            { 
            args.editable && 
                <div onClick={ handleFocus }>
                    edit
                </div> 
            }
        </div>
    )
}

export default Form