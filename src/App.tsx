import { useState } from 'react'
// import {default as reactLogo} from '../public/vite.svg'
import './App.css'
import Home from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/> 
  )
}

export default App
