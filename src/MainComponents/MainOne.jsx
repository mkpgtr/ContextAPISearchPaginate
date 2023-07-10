import React from 'react'
import { useProductsContext } from '../contexts/chatGPTGuidance/ProductsContext'
import ProductList2 from '../components/ProductList2';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const MainOne = () => {
    const {hello,products} = useProductsContext();
    console.log(products);
  return (
    <div>
        <Search />
        <Filter />
        <Pagination />
        <ProductList2 />
    </div>
  )
}

export default MainOne