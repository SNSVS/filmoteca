import fetchWithQueryService from './services/fetchQueryMoviesService';
import renderTrendingMovies from './renderTrendingMovies.js';

const getTrendingMovies = (page = '') => {
  fetchWithQueryService(page)
    .then(response => {
      console.log(response.results);
      renderTrendingMovies(response.results);
    })
    .catch(error => console.log(error));
};

export default getTrendingMovies;
