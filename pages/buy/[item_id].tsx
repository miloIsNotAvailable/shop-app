import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/build/Navbar";

const Category: FC = () => {

    const { category, item_id } = useParams()

    return (
        <>
            <Navbar/>
            <div>
                { category }
                { item_id }
            </div>
        </>
    )
}

export default Category