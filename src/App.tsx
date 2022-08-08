import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import {default as reactLogo} from '../public/vite.svg'
import './App.css'
import Home from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Home/> 
    </BrowserRouter>
  )
}

export default App
