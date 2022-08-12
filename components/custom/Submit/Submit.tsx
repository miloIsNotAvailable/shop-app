import { ButtonHTMLAttributes, Children, DetailedHTMLProps, FC } from "react";
import { styles } from "./SubmitStyles";

type buttonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type Props = buttonPropsType & { content?: string }

const SubmitButton: FC<Props> = ( args: Props ) => {

    return (
        <button 
            className={ styles.button_wrap }
            { ...args as buttonPropsType | Props }
        >
            { args.content || args.children }
        </button>
    )
}

export default SubmitButton