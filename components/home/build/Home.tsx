import { FC, lazy, Suspense } from "react";
// import Room from "../room/Room";
const Room = lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2000)).then(
      () => import("../room/Room")
    );
  });

import Title from '../title'
import { styles } from "./HomeStyles";

const Home: FC = () => {

    return (
        <div className={ styles.home_wrap }>
            <Title/>
            <Suspense fallback={ 
                <div className={ styles.home_fallback }>

                </div> 
            }>
                <Room/>
            </Suspense>
        </div>
    )
}

export default Home