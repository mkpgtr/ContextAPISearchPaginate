import React from 'react';
import { useProductsContext } from '../contexts/chatGPTGuidance/ProductsContext';

const Filter = () => {
  const { handleFilter } = useProductsContext();

  const handleSelectChange = (event) => {
    handleFilter(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="highestRated">Highest Rated</option>
        {/* <option value="category2">Category 2</option> */}
        {/* Add more options for your categories */}
      </select>
    </div>
  );
};

export default Filter;