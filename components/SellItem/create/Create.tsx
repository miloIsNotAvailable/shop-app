import { FC } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Form from "../../custom/Forms";
import { styles } from "../build/SellStyles";

const Create: FC = () => {

    const { data, isLoading } = useAuth()

    return (
        <div className={ styles.create_wrap }>
            <Form 
                placeholder={ 'title' }
                type={ "title" }
                disabled={ isLoading }
            />
            <Form 
                placeholder={ 'price' }
                type={ "price (USD)" }
                disabled={ isLoading }
            />

            <Form 
                placeholder={ 'description' }
                type={ "description" }
                long={ true }
                disabled={ isLoading }
            />
        </div>
    )
}

export default Create