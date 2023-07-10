import { createContext, useContext, useState, useEffect } from "react";
import { addRatingToProducts } from "../../utils/addRatingsToProducts";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paginatedProducts,setPaginatedProducts] = useState([]);

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    setCurrentPage(1);
  };

  const handleFilter = (filterValue) => {
    if (filterValue === 'highestRated') {
      setFilterCriteria('highestRated');
    } else {
      setFilterCriteria(filterValue);
    }
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(addRatingToProducts(data));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  
    setPaginatedProducts(paginatedProducts);
  }, [filteredProducts, currentPage, itemsPerPage,searchInput,filterCriteria]);
  
  useEffect(() => {
    const filteredProducts = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchInput.toLowerCase());
      const matchesFilter =
      filterCriteria === '' ||
      (filterCriteria === 'highestRated' && product.rating === 10 || product.rating===9 || product.rating===8) || // Apply filter for highest rated products
      product.category === filterCriteria;
      return matchesSearch && matchesFilter;
    });
  
    setFilteredProducts(filteredProducts);
  }, [products, searchInput, filterCriteria]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleSearch,
        handleFilter,
        handlePagination,
        paginatedProducts,
        filteredProducts,
        currentPage, setCurrentPage, itemsPerPage,

      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
