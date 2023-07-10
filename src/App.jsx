import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import { AppBar } from '@mui/material'
import PrimarySearchAppBar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductContext from './contexts/chatGPTGuidance/ProductsContext'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <PrimarySearchAppBar /> */}
   {/* <MovieList /> */}
   {/* <ProductList /> */}
   

   </>
  )
}

export default App
