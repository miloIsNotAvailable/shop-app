import { FC } from "react";
import { useParams } from "react-router-dom";
import BuyItem from "../../components/BuyItem";
import Navbar from "../../components/navbar/build/Navbar";

const Category: FC = () => {

    const { category, item_id } = useParams()

    return (
        <>
            <Navbar/>
            <BuyItem/>
        </>
    )
}

export default Category