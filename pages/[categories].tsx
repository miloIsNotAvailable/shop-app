import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/build/Navbar";
import Categories from "../components/category/Category";


const Category: FC = () => {

    const { categories } = useParams()

    return (
        <>
            <Navbar/>
            <Categories/>
        </>
    )
}

export default Category