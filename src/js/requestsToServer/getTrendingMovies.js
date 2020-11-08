import refsPaginate from '../refsPaginat';
import handlePagination from '../handlePagination';
import fetchQueryService from '../services/fetchQueryService';
import renderTemplate from '../renderTemplate';

const getTrendingMovies = () => {
  fetchQueryService.fetchMoviesTrand()
    .then(response => {
      handlePagination(response)
    })
    .catch(error => console.log(error.message));

}

// const generateButtons = (countFilms) => {
//   if (countFilms < 1) {
//     return;
//   }
//   if (countFilms < 5 && countFilms > 1) {
//
//   }
// }


export default getTrendingMovies;
