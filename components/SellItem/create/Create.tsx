import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { newItemState } from "../../../interfaces/reduxInterfaces";
import { useAppSelector } from "../../../redux/hooks";
import Form from "../../custom/Forms";
import { styles } from "../build/SellStyles";
import Desc from "./Desc";
import ItemCategory from "./ItemCategory";
import Price from "./Price";
import Submit from "./Submit";
import Title from "./Title";

const Create: FC = () => {

    const { data, isLoading } = useAuth()
    const navigate = useNavigate()

    useEffect( () => {
        if( !isLoading && !data?.cookie ) navigate( "/login" )
    }, [ data, isLoading ] )

    return (
        <div className={ styles.create_wrap }>
            <Title/>
            <Price/>
            <ItemCategory/>
            <Desc/>
            <Submit/>
        </div>
    )
}

export default Create