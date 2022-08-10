import { FC } from "react";
import Email from "../build/Email";
import { styles } from "../build/FormStyles";
import Password from "../build/Password";
import Submit from "../build/Submit";

const Login: FC = () => {

    return (
        <div className={ styles.page_wrap }>
            <Email/>
            <Password/>
            <Submit type={ "login" }/>
        </div>
    )
}

export default Login