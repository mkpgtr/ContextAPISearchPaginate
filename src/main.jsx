import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppProvider from './contexts/AppContext.jsx'
import ProductsProvider from './contexts/chatGPTGuidance/ProductsContext.jsx'
import MainOne from './MainComponents/MainOne.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<ProductsProvider>

    {/* <App /> */}

    <MainOne />
</ProductsProvider>
  </React.StrictMode>,
)
