import { FC } from "react";
import HomeComponent from '../components/home/build'
import Navbar from "../components/navbar/build/Navbar";

const Home: FC = () => {
    return <>
    <Navbar/>
    <HomeComponent/>
    </> 
}

export default Home