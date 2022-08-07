import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

if( typeof window !== "undefined" ) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
      <App />
  )
}

