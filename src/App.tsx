import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../contexts/AuthContext'
import { useGetRefreshTokenQuery } from '../redux/api/fetchApi'
// import {default as reactLogo} from '../public/vite.svg'
import './App.css'
import Home from './routes'

function App() {
  
  
  const { data, isLoading } = useGetRefreshTokenQuery( {} )
  useEffect( () => {
      console.log( data, isLoading )
  }, [ isLoading, data ] )


  return (
    <BrowserRouter>
      <AuthContextProvider value={ {
            data,
            isLoading
        } }>
          <Home/> 
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
