export function roundRating(movieList) {
    const roundedMovies = movieList.map(movie => {
      const roundedRating = Math.round(movie.rating * 2) / 2; // Round to precision of 0.5
      return { ...movie, rating: roundedRating };
    });
  
    return roundedMovies;
  }