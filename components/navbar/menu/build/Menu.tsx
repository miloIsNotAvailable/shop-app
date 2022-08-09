import { FC } from 'react'
import { styles } from '../../build/NavbarStyles'
import MenuSVG from './MenuSVG'
import OptionsMap from '../options/OptionsMap'
import { useGetHelloQuery } from '../../../../redux/api/fetchApi'

const Menu: FC = () => {

    const { data, isError, isLoading, error } = useGetHelloQuery( {} )
    console.log( data, error )  

    return (
        <div className={ styles.menu } tabIndex={ 1 }>
            <MenuSVG/>
            <OptionsMap/>
        </div>
    )
}

export default Menu