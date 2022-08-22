import { Item } from "@prisma/client";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useUserItemsQuery } from "../../../redux/api/fetchApi";
import ItemDetails from "../../BuyItem/details/ItemDetails";
import ItemDisplay from "../../custom/ItemDisplay";
import { styles } from "../build/AccountStyles";

const Items: FC = () => {

    const { data, isLoading: loading } = useAuth()

    const navigate = useNavigate()


    const { data: itemsData, isLoading } = useUserItemsQuery( JSON.stringify( {
        id: data?.decoded?.id || ""
    } ) ) as { data: Item[], isLoading: boolean }

    console.log( itemsData )

    if( isLoading ) return (
        <div>
            loading contents...
        </div>
    )

    return (
        <div className={ styles.wrap_items }>
            { itemsData && itemsData.map( ( { id, image, price, title } ) => (
                <ItemDisplay
                    id={ id }
                    key={ id }
                    link={ image }
                    title={ title }
                    price={ price }
                />
            ) ) }
        </div>
    )
}

export default Items