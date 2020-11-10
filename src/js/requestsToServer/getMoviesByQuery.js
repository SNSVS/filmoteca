import handlePaginationSearchQuery from '../paginate/handlePaginateSearchQuery';
import fetchQueryService from '../services/fetchQueryService';

const getMoviesByQuery = query => {
  fetchQueryService.resetPage();
  fetchQueryService.setSearchQuery(query);
  fetchQueryService
    .fetchMoviesQuerySearch()
    .then(response => {
      handlePaginationSearchQuery(response);
    })
    .catch(error => console.log(error.message));
};

export default getMoviesByQuery;
