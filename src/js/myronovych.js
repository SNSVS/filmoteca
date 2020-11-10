import onefilmTpl from '../templates/onefilm.hbs';
import renderTemplateListMovies from './renderTemplateListMovies.js';
import renderTemplateSingleMovie from './renderTemplateSingleMovie';
import refs from './refs.js';
import getTrendingMovies from './requestsToServer/getTrendingMovies';
import getMovieById from './requestsToServer/getMovieById';
import fetchQueryService from './services/fetchQueryService';
import searchForm from '../templates/searchForm.hbs';
// const single = document.querySelector('.single');

const apiKey = '0582d3f510963f6ac84a3c592afe6834';
// const id = 12763
// const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;

// const cardsList = document.querySelector('.cards-list');

// const moviesList = document.querySelector('.js-movies__list');
// console.log(cardsList);
refs.movies.addEventListener('click', onMovies);
// refs.homePage.addEventListener('click', onHomePage)

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
