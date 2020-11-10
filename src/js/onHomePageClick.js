import refs from './refs';
import getTrendingMovies from './requestsToServer/getTrendingMovies';

const handlerHomePageClick = (event) => {
  event.preventDefault();
  getTrendingMovies();
}

const onHomePageClick = () => {
  refs.homePage.addEventListener("click", handlerHomePageClick);
}

export default onHomePageClick;
