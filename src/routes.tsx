import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home: FC = () => {

    // @ts-ignore
    const __routes__: any = import.meta.globEager( '/pages/**/[a-z[]*.tsx' )
    
    const routes = Object.keys(__routes__).map((route) => {
        const path = route
          .replace(/\/pages|index|\.tsx$/g, '')
          .replace(/\[\.{3}.+\]/, '*')
          .replace(/\[(.+)\]/, ':$1')
      
        return { path, component: __routes__[route].default }
      })
      // this is a comment
      console.log( routes )      

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    { routes.map( ( { component: Component, path } ) =>(
                        <Route 
                            path={ path } 
                            element={ <Component/> }
                            key={ path }
                        />
                    ) ) }
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home