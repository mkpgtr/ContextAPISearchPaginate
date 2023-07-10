import React from 'react';
import { useProductsContext } from '../contexts/chatGPTGuidance/ProductsContext';

const Pagination = () => {
  const { currentPage,filteredProducts, setCurrentPage, itemsPerPage, paginatedProducts,products } = useProductsContext();

  const pageNumbers = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <div>
      {Array.from({ length: pageNumbers }, (_, index) => (
        <button style={{marginLeft:"2rem"}} key={index + 1} onClick={() => handleClick(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;