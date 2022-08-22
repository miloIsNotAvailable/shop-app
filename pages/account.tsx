import { FC } from "react";
import Account from "../components/Account";
import Navbar from "../components/navbar/build/Navbar";

const UserAccount: FC = () => {

    return (
        <>
            <Navbar/>
            <Account/>
        </>
    )
}

export default UserAccount