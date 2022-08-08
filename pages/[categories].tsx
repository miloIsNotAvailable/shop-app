import { FC } from "react";
import { useParams } from "react-router-dom";

const Category: FC = () => {

    const { categories } = useParams()

    return (
        <div>
            { categories }
        </div>
    )
}

export default Category