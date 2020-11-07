import movie from '../templates/movie.hbs';
import refs from './refs.js';

const renderTrendingMovies = movies => {
  const movieTemplate = movie(movies);
  refs.movies.innerHTML = movieTemplate;
};

export default renderTrendingMovies;
