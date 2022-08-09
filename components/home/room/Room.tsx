import { FC, useEffect, useRef, lazy } from "react";
import { Application } from '@splinetool/runtime'
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import { styles } from "../build/HomeStyles";
import { motion } from "framer-motion";

const Room: FC = () => {

    // test to see if api works
    useEffect( () => {
        fetch( '/api/hello', {
            method: 'POST',
            body: JSON.stringify( { ye: 'ye' } )
        } )
        .then( v => v.json() )
        .then( console.log )
    } )

    // get canvas
    const ref = useRef<HTMLCanvasElement | null>( null )
    const navigate = useNavigate()
    useEffect( () => {
      if( !ref.current ) return
      
        // load spline model, and connect it to the canvas
        const app = new Application( ref.current )
        
        app.load( "https://prod.spline.design/CC2m5QPKtUULORZk/scene.splinecode" )
        .then( () => {          
          app.addEventListener( 'mouseDown', ( e ) => {
            e.target.name && navigate( "/" + e.target.name  )
            } )
        } )

    }, [ ref.current ] )

    return (
      <motion.div 
        className={ styles.canvas_wrap }
        transition={ {
          // delay: 1,
          duration: 1,
          ease: [ 0.625, 0.260, 0.305, 0.785 ]
        } }  
        initial={ { maxHeight: 0 } }
        animate={ { maxHeight: '100%' } }
        exit={ { maxHeight: 0 } }
      >
        <canvas
            ref={ ref }
            // scene="https://prod.spline.design/CC2m5QPKtUULORZk/scene.splinecode" 
            width={ window.innerWidth - 2 * 16 * 2 }
            height={ window.innerHeight }
        />

      </motion.div>
    );
}

export default Room