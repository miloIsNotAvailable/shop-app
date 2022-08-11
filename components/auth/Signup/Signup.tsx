import { FC } from "react";
import Email from "../build/Email";
import { styles } from "../build/FormStyles";
import Password from "../build/Password";
import Redirect from "../build/Redirect";
import Submit from "../build/Submit";
import Username from "../build/Username";

const Login: FC = () => {

    return (
        <div className={ styles.page_wrap }>
            <Email/>
            <Password/>
            <Username/>
            <div className={ styles.form_nav }>
                <Submit type={ "register" }/>
                <Redirect 
                    link={ "/login" }
                    name={ "login" }
                />
            </div>
        </div>
    )
}

export default Login