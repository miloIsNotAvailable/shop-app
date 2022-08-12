import { FC, lazy, Suspense, useEffect } from "react";
import { useGetRefreshTokenQuery } from "../../../redux/api/fetchApi";
import Navbar from "../../navbar/build/Navbar";
// import Room from "../room/Room";
const Room = lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(
      () => import("../room/Room")
    );
  });

import Title from '../title'
import { styles } from "./HomeStyles";
import { AuthContextProvider } from '../../../contexts/AuthContext'

const Home: FC = () => {
    
    return (
        <>
        <Navbar/>
            <div className={ styles.home_wrap }>
                <Title/>
                <Suspense fallback={ 
                    <div className={ styles.home_fallback }>

                    </div> 
                }>
                    <Room/>
                </Suspense>
            </div>
        </>
    )
}

export default Home