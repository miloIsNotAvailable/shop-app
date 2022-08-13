import { FC } from "react";
import AddImage from "../addImage";
import Create from "../create";
import { styles } from "./SellStyles";

const Sell: FC =() => {

    return (
        <div className={ styles.sell_wrap }>
            <AddImage/>
            <Create/>
        </div>
    )
}

export default Sell