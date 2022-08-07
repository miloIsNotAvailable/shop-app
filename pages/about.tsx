import { FC, useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';

const About: FC = () => {

    useEffect( () => {
        fetch( '/api/hello', {
            method: 'POST',
            body: JSON.stringify( { ye: 'ye' } )
        } )
        .then( v => v.json() )
        .then( console.log )
    } )

    const ref = useRef<HTMLIFrameElement | null>( null )

    return (
      <div>
        <Spline 
            scene="https://prod.spline.design/oHKsnqzT1nn3fRY8/scene.splinecode" 
            width={window.innerWidth}
            height={window.innerHeight}
        />

      </div>
    );
}

export default About