import renderTemplateSingleMovie from './renderTemplateSingleMovie';
import refs from './refs.js';
import fetchQueryService from './services/fetchQueryService';

const apiKey = '0582d3f510963f6ac84a3c592afe6834';

refs.movies.addEventListener('click', onMovies);

export function onMovies(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  let id = +e.target.id;
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  fetchQueryService.fetchMovieById(id).then(response => {
    renderTemplateSingleMovie(response);
    refs.movies.removeEventListener('click', onMovies);
    refs.movies.classList.remove('movies__list');
    refs.searchBtn.innerHTML = '';
  });
}
