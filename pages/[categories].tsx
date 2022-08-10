import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/build/Navbar";

const Category: FC = () => {

    const { categories } = useParams()

    return (
        <>
            <Navbar/>
            <div>
                { categories }
            </div>
        </>
    )
}

export default Category