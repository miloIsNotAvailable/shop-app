import { FC } from 'react'
import NewItems from '../components/newItems'
import Navbar from '../components/navbar/build/Navbar'

const Newest: FC = () => {

    return (
        <>
            <Navbar/>
            <NewItems/>
        </>
    )
}

export default Newest