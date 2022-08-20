import { FC } from "react";
import CartItems from "../components/CartItems";
import Navbar from "../components/navbar/build/Navbar";

const Cart: FC = () => {

    return (
        <>
            <Navbar/>
            <CartItems/>
        </>
    )
}

export default Cart