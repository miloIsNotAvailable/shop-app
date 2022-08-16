import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQueryCategoryItemsQuery } from "../../redux/api/fetchApi";
import Navbar from "../navbar/build/Navbar";
import CategoryItemsMap from "./CategoryItemsMap";
import { styles } from "./CategoryStyles";
import { Item } from "@prisma/client";

const Category: FC = () => {

    const { categories } = useParams()

    const { data, isLoading, isError } = useQueryCategoryItemsQuery( JSON.stringify(
        {
            category: categories
        }
    ) )

    console.log( data )

    return (
        <>
            {/* <Navbar/> */}
            <div>
                <div className={ styles.category_title }>
                    { categories }
                </div>
                { isLoading && <div>loading...</div> }
                { data && <CategoryItemsMap arr={ data }/> }
            </div>
        </>
    )
}

export default Category