export function addRatingToProducts(products) {
    // Iterate over each product object
    const productsWithRating = products.map((product) => {
      // Add a rating property to the product object
      const updatedProduct = {
        ...product,
        rating: calculateRating(),
      };
      return updatedProduct;
    });
  
    return productsWithRating;
  }
  
  // Helper function to calculate a random rating for each product
  function calculateRating() {
    // Generate a random number between 0 and 10
    const rating = Math.floor(Math.random() * 11);
    return rating;
  }