import React from 'react';
import { useProductsContext } from '../contexts/chatGPTGuidance/ProductsContext';

const Search = () => {
  const { handleSearch } = useProductsContext();

  const handleInputChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="Search Products" />
    </div>
  );
};

export default Search;