import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

if( typeof window !== "undefined" ) {
  ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement,
    // <React.StrictMode>
    <PayPalScriptProvider options={ { 
      "client-id": "AQtgo9nGuUjugdLm2Yk_--EzIPOsQCmP8ki_TUe4gq0Oh_Sj5c8UONC9Gzk4z_L_JSdMPToaAh8dQXh8",
      
    } }>
      <Provider store={ store }>
        <App />
      </Provider>
    </PayPalScriptProvider>
  )
}

