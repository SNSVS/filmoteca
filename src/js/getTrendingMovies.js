import fetchWithQueryService from './services/fetchQueryMoviesService';
import movie from '../templates/movie.hbs';
import renderTemplate from './renderTemplate.js';
import refs from './refs.js';

const getTrendingMovies = (page = '') => {
  fetchWithQueryService(page)
    .then(response => {
      console.log(response.results);
      renderTemplate(response.results, movie, refs.movies);
    })
    .catch(error => console.log(error));
};

export default getTrendingMovies;
