import { FC, useEffect, useRef, lazy } from "react";
import { Application } from '@splinetool/runtime'
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

// import { 
//   Color, 
//   Euler, 
//   Object3D, 
//   OrthographicCamera, 
//   PCFShadowMap, 
//   Scene, 
//   WebGLRenderer
// } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';


const About: FC = () => {

    useEffect( () => {
        fetch( '/api/hello', {
            method: 'POST',
            body: JSON.stringify( { ye: 'ye' } )
        } )
        .then( v => v.json() )
        .then( console.log )
    } )

    const ref = useRef<HTMLCanvasElement | null>( null )
    const navigate = useNavigate()
    useEffect( () => {
      if( !ref.current ) return

        const app = new Application( ref.current )
        app.load( "https://prod.spline.design/CC2m5QPKtUULORZk/scene.splinecode" )
        .then( () => {
          app.addEventListener( 'mouseDown', ( e ) => {
            e.target.name === 'Group' && navigate( "/" )
          } )
        } )

    }, [ ref.current ] )

    return (
      <div>
        <canvas
            ref={ ref }
            // scene="https://prod.spline.design/CC2m5QPKtUULORZk/scene.splinecode" 
            width={ window.innerWidth || 1000 }
            height={ window.innerHeight || 500 }
        />

      </div>
    );
}

export default About