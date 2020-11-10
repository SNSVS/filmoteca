import refs from './refs';
import getTrendingMovies from './requestsToServer/getTrendingMovies';
import searchForm from '../templates/searchForm.hbs';
import {onMovies} from "./myronovych"
import debouncedInputQuery from './homePage';

const handlerHomePageClick = (event) => {
  event.preventDefault();
  getTrendingMovies();
  refs.movies.classList.add('movies__list');
  refs.movies.addEventListener('click', onMovies);
  refs.searchBtn.innerHTML = searchForm();
  refs.searchBtn.addEventListener("input", debouncedInputQuery);
}

const onHomePageClick = () => {
  refs.homePage.addEventListener("click", handlerHomePageClick);
}

export default onHomePageClick;
