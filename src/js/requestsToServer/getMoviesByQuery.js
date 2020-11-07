import handlePagination from '../handlePagination';
import fetchQueryService from '../services/fetchQueryService';

const getMoviesByQuery = (query) => {

  fetchQueryService.fetchMoviesQuerySearch(query)
    .then(response => {
      handlePagination(response)
    })
    .catch(error => console.log(error.message));
}

export default getMoviesByQuery;
