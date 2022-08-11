import { FC } from "react";
import CurrentState from "../build/CurrentState";
import Email from "../build/Email";
import { styles } from "../build/FormStyles";
import Password from "../build/Password";
import Redirect from "../build/Redirect";
import Submit from "../build/Submit";

const Login: FC = () => {

    return (
        <div className={ styles.page_wrap }>
            <Email/>
            <Password/>
            <div className={ styles.form_nav }>
                <Submit type={ "login" }/>
                <Redirect 
                    link={ "/signup" }
                    name={ "signup" }
                />
                <CurrentState/>
            </div>
        </div>
    )
}

export default Login