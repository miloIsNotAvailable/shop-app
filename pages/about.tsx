import { FC, useEffect, useRef } from "react";
// import { Application } from '@splinetool/runtime'
import Spline from "@splinetool/react-spline";
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
    useEffect( () => {
      if( !ref.current ) return

        // // camera
        // const camera = new OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 50000);
        // camera.position.set(1.24, -19.24, 1000);
        // camera.quaternion.setFromEuler(new Euler(0, 0, 0));

        // // scene
        // const scene = new Scene();

        // // spline scene
        // const loader = new SplineLoader();
        // const e = loader.load(
        //   'https://prod.spline.design/oHKsnqzT1nn3fRY8/scene.splinecode',
        //   (splineScene: any) => {
        //     scene.add(splineScene);
        //   }
        // );

        // console.log( new Object3D().children )

        // // renderer
        // const renderer = new WebGLRenderer({ antialias: true });
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setAnimationLoop(animate);
        // document.body.appendChild(renderer.domElement);

        // // scene settings
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = PCFShadowMap;

        // scene.background = new Color('#ff8eee');
        // renderer.setClearAlpha(1);

        // // orbit controls
        // // const controls = new OrbitControls(camera, renderer.domElement);
        // // controls.enableDamping = true;
        // // controls.dampingFactor = 0.125;

        // window.addEventListener('resize', onWindowResize);
        // function onWindowResize() {
        //   camera.left = window.innerWidth / - 2;
        //   camera.right = window.innerWidth / 2;
        //   camera.top = window.innerHeight / 2;
        //   camera.bottom = window.innerHeight / - 2;
        //   camera.updateProjectionMatrix();
        //   renderer.setSize(window.innerWidth, window.innerHeight);
        // }

        // function animate() {
        //   // controls.update();
        //   renderer.render(scene, camera);
        // }


    }, [ ref.current ] )

    return (
      <div>
        <Spline
            ref={ ref }
            scene="https://prod.spline.design/CC2m5QPKtUULORZk/scene.splinecode" 
            width={ 1000 }
            height={ 500 }
            onMouseDown={ e => {
              
              if( e.target.name === "Cube 6" ) console.log( e.target.name ) 
            } }
        />

      </div>
    );
}

export default About