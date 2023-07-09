import React, { useContext, useEffect, useState } from 'react'

import { movies as allMovies } from '../data/movies'
import { addRatingToProducts } from '../utils/addRatingsToProducts'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [movies,setMovies] = useState(allMovies)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(5);
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])
 

  const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = filteredProducts.slice(
      indexOfFirstResult,
      indexOfLastResult
    );

    // ! current product results
  


    console.log(currentResults)
//   const totalPages = Math.ceil(filteredMovies.length / resultsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / resultsPerPage);
 

  const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const fetchedProducts = await response.json();
    setProducts(addRatingToProducts(fetchedProducts))
  }

  useEffect(()=>{
 
    fetchProducts()
  },[])

  useEffect(() => {
   
   
    const delayDebounceFn = setTimeout(() => {


        if(!searchTerm){
            
        //   return setFilteredMovies(movies)
          return setFilteredProducts(products)
        }

    
        

        //   const filteredResults = movies.filter((movie) => {
      const filteredResults = products.filter((product) => {
       
       
        const title = product.title.toLowerCase();
        console.log(title)
        return title.includes(searchTerm.toLowerCase());
      });
   
    //   setFilteredMovies(filteredResults);
      setFilteredProducts(filteredResults);
    }, 300); 
   

    return () => clearTimeout(delayDebounceFn);
//   }, [searchTerm, movies]);
  }, [searchTerm, products]);

  



    

    const handleSearch = (e)=>{
        setSearchTerm(event.target.value);
        console.log(e.target.value)
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
      }

   



  return (
  <AppContext.Provider value={{products,movies,handleSearch,filteredMovies,currentResults,handlePageChange,totalPages,currentPage,filteredProducts}}> 


    {children}
  </AppContext.Provider>
  )
}

export const useAppContext = ()=>{
  return useContext(AppContext)
}

export default AppProvider